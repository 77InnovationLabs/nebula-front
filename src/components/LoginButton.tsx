import React, { useEffect, useState } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { useUserStore } from '../store/useUserStore';
import api from '../services/api';
import api_pessoa from '../services/api_pessoa';
import NameModal from './NameModal';
import { useRouter } from 'next/router';

const LoginButton: React.FC = () => {
  const { ready, authenticated, login, logout, user } = usePrivy();
  const setWalletAddress = useUserStore((state) => state.setWalletAddress);
  const setStudentId = useUserStore((state) => state.setStudentId);
  const setStudentName = useUserStore((state) => state.setStudentName);

  const [showModal, setShowModal] = useState(false);
  const [pendingWallet, setPendingWallet] = useState('');
  const [pendingEmail, setPendingEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (authenticated && user?.wallet?.address) {
      setWalletAddress(user.wallet.address);

      const fetchStudent = async () => {
        try {
          const response = await api.get(`/alunos/by-wallet/${user.wallet.address}`);
          const { id, nome } = response.data;
          setStudentId(id);
          setStudentName(nome);
          router.push('/cursos');
        } catch {
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
        email: user.email?.address || '',
      };
      const createResponsePessoa = await api_pessoa.post('/pessoas/v1', payload_pessoa);
      const { id: pessoa_id } = createResponsePessoa.data;

      const response = await api.post('/alunos', {
        pessoa_id,
        nome: name,
        wallet: pendingWallet,
        email: pendingEmail,
      });

      const { id, nome } = response.data;
      setStudentId(id);
      setStudentName(nome);
      router.push('/cursos');
    } catch (err) {
      console.error('Erro ao criar aluno', err);
    } finally {
      setShowModal(false);
    }
  };

  return (
    <>
      <style jsx>{`
        .btn {
          padding: 0.75rem 2rem;
          font-size: 1rem;
          font-weight: 500;
          border: 2px solid black;
          cursor: pointer;
          transition: background-color 0.2s ease;
          background-color: black;
          color: white;
        }

        .btn:hover {
          background-color: #333;
        }

        .btn:disabled {
          background-color: gray;
          border-color: gray;
          cursor: not-allowed;
        }
      `}</style>

      {!ready ? (
        <button className="btn" disabled>
          Loading...
        </button>
      ) : authenticated ? (
        <>
          {showModal && <NameModal onSubmit={handleCreateStudent} />}
        </>
      ) : (
        <button className="btn" onClick={login}>
          Login with Privy
        </button>
      )}
    </>
  );
};

export default LoginButton;
