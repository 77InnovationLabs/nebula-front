import React, { useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { useUserStore } from '../store/useUserStore';
import api from '../services/api';
import api_pessoa from '../services/api_pessoa';

const LoginButton: React.FC = () => {
  const { ready, authenticated, login, logout, user } = usePrivy();
  const setWalletAddress = useUserStore((state) => state.setWalletAddress);
  const setStudentId = useUserStore((state) => state.setStudentId);
  const setStudentName = useUserStore((state) => state.setStudentName);

  useEffect(() => {
    if (authenticated && user?.wallet?.address) {
      setWalletAddress(user.wallet.address);

      const fetchStudentData = async () => {
        try {
          // Buscar aluno pelo wallet
          const response = await api.get(`/alunos/by-wallet/${user.wallet.address}`);
          const { id, nome } = response.data;
          setStudentId(id);
          setStudentName(nome);
        } catch (error) {
          // Se não encontrar, abrir prompt para inserir nome do aluno
          console.warn('Aluno não encontrado, criando novo aluno...');
          const nome = window.prompt('Please inform your name:');
          if (nome) {
            try {
              const payload_pessoa = {
                nome: nome,
                email: user.email?.address || "",
              };
              // Criar pessoa antes de criar aluno
              const createResponsePessoa = await api_pessoa.post('/pessoas/v1', payload_pessoa);
              const { id: pessoa_id } = createResponsePessoa.data;

              // Criar aluno com o ID da pessoa e wallet do usuário
              const payload_aluno = {
                pessoa_id: pessoa_id,
                wallet: user.wallet.address,
                nome: nome,
              };
              const createResponse = await api.post('/alunos', payload_aluno);
              const { id, nome: nomeAluno } = createResponse.data;
              setStudentId(id);
              setStudentName(nomeAluno);
            } catch (creationError) {
              console.error('Erro ao criar aluno:', creationError);
              setStudentId(null);
              setStudentName(null);
            }
          }
        }
      };

      fetchStudentData();
    } else {
      setWalletAddress(null);
      setStudentId(null);
      setStudentName(null);
    }
  }, [authenticated, user, setWalletAddress, setStudentId, setStudentName]);

  if (!ready) {
    return (
      <button
        disabled
        className="px-4 py-2 bg-gray-400 text-white rounded"
      >
        Loading...
      </button>
    );
  }

  if (authenticated) {
    // Não exibe botão de login se autenticado
    return null;
  }

  return (
    <button
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
      onClick={login}
    >
      Login with Privy
    </button>
  );
};

export default LoginButton;
