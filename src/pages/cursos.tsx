// src/pages/cursos.tsx
import { useEffect, useState } from 'react';
import { useUserStore } from '../store/useUserStore';
import api from '../services/api';
import Link from 'next/link';


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

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await api.get(`/alunocursos/curso/${studentId}`);
        // Se API retornar null, garanta um array vazio
        setCursos(response.data ?? []);
      } catch (error) {
        console.error('Erro ao buscar cursos do aluno:', error);
        setCursos([]); // fallback de segurança
      } finally {
        setLoading(false);
      }
    };

    if (studentId) {
      fetchCursos();
    }
  }, [studentId]);

  if (loading) {
    return (
      <div className="p-8 text-center text-gray-700 dark:text-gray-200">
        Carregando cursos...
      </div>
    );
  }

  if (cursos.length === 0) {
    return (
      <div className="p-8 text-center text-gray-700 dark:text-gray-200">
        <h1 className="text-2xl font-bold mb-4">Meus Cursos</h1>
        <p>Você ainda não está matriculado em nenhum curso.</p>
        <Link href="/cursos/disponiveis">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
            Ver cursos disponíveis
            </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Meus Cursos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cursos.map((matricula) => (
          <div
            key={matricula.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {matricula.curso_nome}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {matricula.curso_descricao}
            </p>
            <p className="text-sm mb-1">
              Progresso: {matricula.percentual_concluido}%
            </p>
            <p className="text-sm mb-1">
              Status Curso: {matricula.status_curso}
            </p>
            <p className="text-sm mb-1">
              Status Pagamento: {matricula.status_pagamento}
            </p>
            <p className="text-sm mb-4">
              XP: {matricula.xp_ganho} ganho / {matricula.xp_disponivel} disponível
            </p>
            <Link href={`/cursos/${matricula.curso_id}`}>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
                Acessar Curso
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
