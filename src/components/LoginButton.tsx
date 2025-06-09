import React, { useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { useUserStore } from '../store/useUserStore';
import api from '../services/api';

const LoginButton: React.FC = () => {
  const { ready, authenticated, login, logout, user } = usePrivy();
  const setWalletAddress = useUserStore((state) => state.setWalletAddress);
  const setStudentId = useUserStore((state) => state.setStudentId);
  const setStudentName = useUserStore((state) => state.setStudentName);

  useEffect(() => {
    if (authenticated && user?.wallet?.address) {
      setWalletAddress(user.wallet.address);

      // Buscar dados do aluno no backend
      const fetchStudentData = async () => {
        try {
          const response = await api.get(
            `/alunos/by-wallet/${user.wallet.address}`
          );
          const { id, nome } = response.data;
          setStudentId(id);
          setStudentName(nome);
        } catch (error) {
          console.error('Erro ao buscar dados do aluno:', error);
          setStudentId(null);
          setStudentName(null);
        }
      };

      fetchStudentData();
    } else {
      // Se deslogar, limpar dados
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
    return (
      <button
        className="px-4 py-2 bg-red-500 text-white rounded"
        onClick={logout}
      >
        Logout
      </button>
    );
  }

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={login}
    >
      Login with Privy
    </button>
  );
};

export default LoginButton;
