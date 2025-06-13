import React, { useEffect, useState } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { useUserStore } from '../store/useUserStore';
import api from '../services/api';
import api_pessoa from '../services/api_pessoa';
import NameModal from './NameModal';

const LoginButton: React.FC = () => {
  const { ready, authenticated, login, logout, user } = usePrivy();
  const setWalletAddress = useUserStore((state) => state.setWalletAddress);
  const setStudentId = useUserStore((state) => state.setStudentId);
  const setStudentName = useUserStore((state) => state.setStudentName);

  const [showModal, setShowModal] = useState(false);
  const [pendingWallet, setPendingWallet] = useState('');
  const [pendingEmail, setPendingEmail] = useState('');

  useEffect(() => {
    if (authenticated && user?.wallet?.address) {
      setWalletAddress(user.wallet.address);

      const fetchStudent = async () => {
        try {
          const response = await api.get(`/alunos/by-wallet/${user.wallet.address}`);
          const { id, nome } = response.data;
          setStudentId(id);
          setStudentName(nome);
        } catch {
          // Se não encontrar, mostrar modal
          setPendingWallet(user.wallet.address);
          setPendingEmail(user.email?.address || '');
          setShowModal(true);
        }
      };

      fetchStudent();
    } else {
      setWalletAddress(null);
      setStudentId(null);
      setStudentName(null);
    }
  }, [authenticated, user]);

  const handleCreateStudent = async (name: string) => {
    try {

      const payload_pessoa = {
        nome: name,
        email: user.email?.address || "",
      };
      // Criar pessoa antes de criar aluno
      const createResponsePessoa = await api_pessoa.post('/pessoas/v1', payload_pessoa);
      const { id: pessoa_id } = createResponsePessoa.data;


      const response = await api.post('/alunos', {
        pessoa_id: pessoa_id,
        nome: name,
        wallet: pendingWallet,
        email: pendingEmail,
      });
      const { id, nome } = response.data;
      setStudentId(id);
      setStudentName(nome);
    } catch (err) {
      console.error('Erro ao criar aluno', err);
    } finally {
      setShowModal(false);
    }
  };

  if (!ready) {
    return <button disabled className="px-4 py-2 bg-gray-400 text-white rounded">Loading...</button>;
  }

  if (authenticated) {
    return (
      <>
        {showModal && <NameModal onSubmit={handleCreateStudent} />}
        {/* Botão de logout pode ficar em outro componente, como na navbar */}
      </>
    );
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
