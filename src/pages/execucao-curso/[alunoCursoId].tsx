// src/pages/execucao-curso/[alunoCursoId].tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../../services/api';
import Validate from '../../components/Validate';
import { useAbiLoader } from '../../hooks/useAbiLoader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

console.log("DEBUG useAbiLoader", useAbiLoader);

interface AlunoCursoItemModulo {
  id: string;
  aluno_curso_id: string;
  item_modulo_id: string;
  item_modulo_nome: string;
  tipo_item_modulo: string;
  validator_rede: string;
  validator_endereco: string;
  aula_texto: string;
  video_url: string;
  status: string;
  progresso: number;
  tempo_assistido: number;
  endereco_contrato_validar: string;
  blockchain_rede_validacao: string;
  blockchain_tx_envio: string;
  status_validacao_contrato: string;
  created_at: string;
  updated_at: string;
}

export default function CourseExecutionPage() {
  const router = useRouter();
  const { alunoCursoId } = router.query;

  const [items, setItems] = useState<AlunoCursoItemModulo[]>([]);
  const [selectedItem, setSelectedItem] = useState<AlunoCursoItemModulo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        if (alunoCursoId) {
          const res = await api.get(`/alunocursos/${alunoCursoId}/itemmodulos`);
          setItems(res.data ?? []);
          if (res.data.length > 0) {
            setSelectedItem(res.data[0]);
          }
        }
      } catch (err) {
        console.error(err);
        toast.error('Error loading course items.');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [alunoCursoId]);

  const completeLesson = async () => {
    if (!selectedItem) return;

    const payload = {
      status: 'completed',
      progresso: 100,
      tempo_assistido: 600,
    };

    try {
      await api.patch(`/alunocursoitemmodulos/${selectedItem.id}`, payload);
      toast.success('Lesson marked as completed!');
      goToNext();
    } catch (err) {
      console.error(err);
      toast.error('Error marking lesson as completed.');
    }
  };

  const goToNext = () => {
    const idx = items.findIndex(i => i.id === selectedItem?.id);
    if (idx >= 0 && idx < items.length - 1) {
      setSelectedItem(items[idx + 1]);
    } else {
      toast.success('You have completed all items in this course! 🎉');
    }
  };

  const { abi, loading: abiLoading, error: abiError } = useAbiLoader(
    selectedItem?.endereco_contrato_validar || "",
    (selectedItem?.blockchain_rede_validacao as 'sepolia' | 'avalancheFuji') || 'sepolia'
  );

  if (loading) {
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontSize: "18px",
        color: "#555"
      }}>
        Loading course execution...
      </div>
    );
  }

  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "#f9f9f9" }}>
      {/* Main panel */}
      <div style={{ flex: 2, padding: "2rem", overflowY: "auto" }}>
        {selectedItem ? (
          <div style={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "2rem",
          }}>
            <h2 style={{ fontSize: "20px", marginBottom: "1rem" }}>
              {selectedItem.item_modulo_nome}
            </h2>

            <p><strong>Status:</strong> {selectedItem.status}</p>
            <p><strong>Progress:</strong> {selectedItem.progresso}%</p>

            {selectedItem.tipo_item_modulo === 'aula' && (
              <>
                <p><strong>Watched Time:</strong> {selectedItem.tempo_assistido} seconds</p>
                <p><strong>Content:</strong> {selectedItem.aula_texto}</p>
                {selectedItem.status !== 'completed' && (
                  <button
                    onClick={completeLesson}
                    style={{
                      marginTop: "1rem",
                      padding: "0.5rem 1rem",
                      backgroundColor: "#28a745",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer"
                    }}
                  >
                    Complete Lesson
                  </button>
                )}
              </>
            )}

            {selectedItem.tipo_item_modulo === 'video' && (
              <>
                <p><strong>Video Link:</strong> {selectedItem.video_url}</p>
                {selectedItem.status !== 'completed' && (
                  <button
                    onClick={completeLesson}
                    style={{
                      marginTop: "1rem",
                      padding: "0.5rem 1rem",
                      backgroundColor: "#28a745",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer"
                    }}
                  >
                    Complete Video
                  </button>
                )}
              </>
            )}

            {selectedItem.tipo_item_modulo === 'contract_validation' && (
              <>
                <p><strong>Contract Validation Status:</strong> {selectedItem.status_validacao_contrato}</p>
                {abiLoading && <p>Loading ABI...</p>}
                {abiError && <p style={{ color: "red" }}>{abiError}</p>}

                {abi && (
                  <Validate
                    contractAddress={selectedItem.validator_endereco}
                    abi={abi}
                    validatorAddress={selectedItem.endereco_contrato_validar}
                    onSuccess={() => goToNext()}
                  />
                )}
              </>
            )}
          </div>
        ) : (
          <p>No item selected.</p>
        )}
      </div>

      {/* Side panel */}
      <div style={{
        flex: 1,
        padding: "1rem",
        backgroundColor: "#fff",
        borderLeft: "1px solid #ddd",
        overflowY: "auto"
      }}>
        <h3 style={{ fontSize: "18px", marginBottom: "1rem" }}>Course Items</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {items.map(item => (
            <li
              key={item.id}
              onClick={() => setSelectedItem(item)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                marginBottom: "0.5rem",
                backgroundColor: selectedItem?.id === item.id ? "#e7f1ff" : "#f9f9f9",
                border: selectedItem?.id === item.id ? "1px solid #007bff" : "1px solid #ddd",
                cursor: "pointer"
              }}
            >
              <strong>{item.item_modulo_nome || '(Unnamed)'}</strong>
            </li>
          ))}
        </ul>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
