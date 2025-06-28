// src/pages/cursos/disponiveis.tsx
import { useEffect, useState } from 'react';
import { useUserStore } from '../../store/useUserStore';
import api from '../../services/api';
import { useRouter } from 'next/router';

interface Curso {
  id: string;
  nome: string;
  descricao: string;
}

export default function AvailableCourses() {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [loading, setLoading] = useState(true);
  const studentId = useUserStore((state) => state.studentId);
  const router = useRouter();

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await api.get('/cursos');
        setCursos(response.data ?? []);
      } catch (error) {
        console.error('Error fetching available courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCursos();
  }, []);

  const handleEnroll = async (cursoId: string) => {
    try {
      await api.post('/alunocursos', {
        aluno_id: studentId,
        curso_id: cursoId,
      });
      router.push('/cursos');
    } catch (error) {
      console.error('Error enrolling:', error);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: "2rem", textAlign: "center", color: "#555" }}>
        Loading available courses...
      </div>
    );
  }

  if (cursos.length === 0) {
    return (
      <div style={{ padding: "2rem", textAlign: "center", color: "#555" }}>
        <p>No available courses at the moment.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "1rem", color: "#222" }}>
        Available Courses
      </h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1rem"
      }}>
        {cursos.map((curso) => (
          <div
            key={curso.id}
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1rem",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              transition: "box-shadow 0.3s"
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)")}
          >
            <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "0.5rem" }}>
              {curso.nome}
            </h2>
            <p style={{ color: "#666", marginBottom: "0.5rem" }}>
              {curso.descricao}
            </p>
            <button
              onClick={() => handleEnroll(curso.id)}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
