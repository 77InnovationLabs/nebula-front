import { useEffect, useState } from 'react';
import { useUserStore } from '../../store/useUserStore';
import api from '../../services/api';
import { useRouter } from 'next/router';

interface Curso {
  id: string;
  nome: string;
  descricao: string;
}

export default function CursosDisponiveis() {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [loading, setLoading] = useState(true);
  const studentId = useUserStore((state) => state.studentId);
  const router = useRouter();

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await api.get('/cursos'); // seu endpoint de lista de cursos disponíveis
        setCursos(response.data ?? []);
      } catch (error) {
        console.error('Erro ao buscar cursos disponíveis:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCursos();
  }, []);

  const handleMatricular = async (cursoId: string) => {
    try {
      await api.post('/alunocursos', {
        aluno_id: studentId,
        curso_id: cursoId,
      });
      // Redireciona para Meus Cursos após matrícula
      router.push('/cursos');
    } catch (error) {
      console.error('Erro ao matricular:', error);
    }
  };

  if (loading) {
    return (
      <div className="p-8 text-center text-gray-700 dark:text-gray-200">
        Carregando cursos disponíveis...
      </div>
    );
  }

  if (cursos.length === 0) {
    return (
      <div className="p-8 text-center text-gray-700 dark:text-gray-200">
        <p>Nenhum curso disponível no momento.</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Cursos Disponíveis
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cursos.map((curso) => (
          <div
            key={curso.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{curso.nome}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{curso.descricao}</p>
            <button
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
              onClick={() => handleMatricular(curso.id)}
            >
              Matricular-se
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
