// src/pages/cursos.tsx
import { useEffect, useState } from 'react';
import { useUserStore } from '../store/useUserStore';
import api from '../services/api';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface AlunoCurso {
  id: string;
  aluno_id: string;
  aluno_nome: string;
  curso_id: string;
  curso_nome: string;
  curso_descricao: string;
  data_matricula: string;
  percentual_concluido: number;
  status_curso: string;
  status_pagamento: string;
  xp_ganho: number;
  xp_disponivel: number;
}

export default function CursosPage() {
  const studentId = useUserStore((state) => state.studentId);
  const [cursos, setCursos] = useState<AlunoCurso[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await api.get(`/alunocursos/curso/${studentId}`);
        setCursos(response.data ?? []);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setCursos([]);
      } finally {
        setLoading(false);
      }
    };

    if (studentId) {
      fetchCursos();
    }
  }, [studentId]);

  const handleRemove = async (id: string) => {
    if (confirm('Are you sure you want to remove this enrollment?')) {
      try {
        await api.delete(`/alunocursos/${id}`);
        setCursos((prev) => prev.filter((curso) => curso.id !== id));
      } catch (error) {
        console.error('Error removing enrollment:', error);
        alert('Error removing enrollment.');
      }
    }
  };

  if (loading) {
    return (
      <div style={{ padding: "2rem", textAlign: "center", color: "#555" }}>
        Loading courses...
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "1rem", color: "#222" }}>
        My Courses
      </h1>

      {/* link para cursos disponíveis sempre visível */}
      <div style={{ marginBottom: "1rem" }}>
        <Link href="/cursos/disponiveis">
          <button
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            View Available Courses
          </button>
        </Link>
      </div>

      {cursos.length === 0 ? (
        <div style={{ textAlign: "center", color: "#555" }}>
          <p>You are not enrolled in any course yet.</p>
        </div>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1rem"
        }}>
          {cursos.map((matricula) => (
            <div
              key={matricula.id}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                transition: "box-shadow 0.3s",
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)")}
            >
              <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "0.5rem" }}>
                {matricula.curso_nome}
              </h2>
              <p style={{ color: "#666", marginBottom: "0.5rem" }}>
                {matricula.curso_descricao}
              </p>
              <p style={{ fontSize: "14px", marginBottom: "0.25rem" }}>
                Progress: {matricula.percentual_concluido}%
              </p>
              <p style={{ fontSize: "14px", marginBottom: "0.25rem" }}>
                Course Status: {matricula.status_curso}
              </p>
              <p style={{ fontSize: "14px", marginBottom: "0.25rem" }}>
                Payment Status: {matricula.status_pagamento}
              </p>
              <p style={{ fontSize: "14px", marginBottom: "0.5rem" }}>
                XP: {matricula.xp_ganho} earned / {matricula.xp_disponivel} available
              </p>

              <div style={{ display: "flex", gap: "0.5rem" }}>
                <button
                  onClick={() => router.push(`/execucao-curso/${matricula.id}`)}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                >
                  Access
                </button>
                <button
                  onClick={() => handleRemove(matricula.id)}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#dc2626",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
