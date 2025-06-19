import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AlunoCursoItemModulo {
  id: string;
  aluno_curso_id: string;
  item_modulo_id: string;
  item_modulo_nome: string;
  tipo_item_modulo: string;
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

export default function ExecucaoCursoPage() {
  const router = useRouter();
  const { alunoCursoId } = router.query;

  const [itens, setItens] = useState<AlunoCursoItemModulo[]>([]);
  const [itemSelecionado, setItemSelecionado] = useState<AlunoCursoItemModulo | null>(null);
  const [loading, setLoading] = useState(true);

  const [contractAddress, setContractAddress] = useState('');
  const [validating, setValidating] = useState(false);

  useEffect(() => {
    const fetchItens = async () => {
      try {
        if (alunoCursoId) {
          const res = await api.get(`/alunocursos/${alunoCursoId}/itemmodulos`);
          setItens(res.data);
          if (res.data.length > 0) {
            setItemSelecionado(res.data[0]);
          }
        }
      } catch (err) {
        console.error(err);
        toast.error('Erro ao carregar itens do curso.');
      } finally {
        setLoading(false);
      }
    };

    fetchItens();
  }, [alunoCursoId]);

  const concluirAula = async () => {
    if (!itemSelecionado) return;

    const payload = {
      status: 'concluído',
      progresso: 100,
      tempo_assistido: 600,
    };

    try {
      await api.patch(`/alunocursoitemmodulos/${itemSelecionado.id}`, payload);
      toast.success('Aula concluída com sucesso!');
      avancarProximo();
    } catch (err) {
      console.error(err);
      toast.error('Erro ao concluir a aula.');
    }
  };

  const validarContrato = async () => {
    if (!itemSelecionado) return;
    setValidating(true);

    const payload = {
      status: 'concluído',
      progresso: 100,
      endereco_contrato_validar: contractAddress,
      blockchain_rede_validacao: 'ethereum',
      blockchain_tx_envio: 'tx_hash_exemplo',
      status_validacao_contrato: 'validação contrato concluída',
    };

    try {
      await api.patch(`/alunocursoitemmodulos/${itemSelecionado.id}`, payload);
      toast.success('Contrato validado com sucesso!');
      avancarProximo();
    } catch (err) {
      console.error(err);
      toast.error('Erro ao validar o contrato.');
    } finally {
      setValidating(false);
    }
  };

  const avancarProximo = () => {
    const idx = itens.findIndex(i => i.id === itemSelecionado?.id);
    if (idx >= 0 && idx < itens.length - 1) {
      setItemSelecionado(itens[idx + 1]);
    } else {
      toast.success('Você concluiu todos os itens deste curso! 🎉');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg text-gray-600">
        Carregando execução do curso...
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Painel principal - Detalhes */}
      <div className="w-2/3 p-8 overflow-y-auto">
        {itemSelecionado ? (
          <div className="bg-white shadow rounded p-6 transition-all">
            <h2 className="text-2xl font-bold mb-4">
              {itemSelecionado.item_modulo_nome}
            </h2>

            <p className="mb-2">
              <span className="font-medium">Status:</span> {itemSelecionado.status}
            </p>
            <p className="mb-2">
              <span className="font-medium">Progresso:</span> {itemSelecionado.progresso}%
            </p>

            {itemSelecionado.tipo_item_modulo === 'aula' && (
              <>
                <p className="mb-4">
                  <span className="font-medium">Tempo assistido:</span> {itemSelecionado.tempo_assistido} segundos
                </p>

                {itemSelecionado.status !== 'concluído' && (
                  <button
                    onClick={concluirAula}
                    className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                  >
                    Concluir Aula
                  </button>
                )}
              </>
            )}

            {itemSelecionado.tipo_item_modulo === 'contract_validation' && (
              <>
                <p className="mb-4">
                  <span className="font-medium">Status validação:</span> {itemSelecionado.status_validacao_contrato}
                </p>

                <label className="block mb-1 font-medium">Endereço do Contrato</label>
                <input
                  type="text"
                  value={contractAddress}
                  onChange={(e) => setContractAddress(e.target.value)}
                  placeholder="0x..."
                  className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
                />

                <button
                  onClick={validarContrato}
                  disabled={validating}
                  className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  {validating ? 'Validando...' : 'Validar Contrato'}
                </button>
              </>
            )}
          </div>
        ) : (
          <p>Nenhum item selecionado.</p>
        )}
      </div>

      {/* Painel lateral - Lista */}
      <div className="w-1/3 p-6 bg-white border-l overflow-y-auto">
        <h3 className="text-xl font-bold mb-4">Itens do Curso</h3>
        <ul className="space-y-2 list-none p-0">
          {itens.map((item) => (
            <li
              key={item.id}
              onClick={() => setItemSelecionado(item)}
              className={`p-4 rounded cursor-pointer transition ${
                itemSelecionado?.id === item.id
                  ? 'bg-blue-100 border border-blue-500'
                  : 'hover:bg-gray-100'
              }`}
            >
              <p className="font-semibold">{item.item_modulo_nome || '(Sem nome)'}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
