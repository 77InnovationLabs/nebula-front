import React from 'react';
import { useUserStore } from '../store/useUserStore';
import { usePrivy } from '@privy-io/react-auth';
import { Copy } from 'lucide-react';
import { toast } from 'react-toastify';

const Navbar: React.FC = () => {
  const walletAddress = useUserStore((state) => state.walletAddress);
  const studentId = useUserStore((state) => state.studentId);
  const studentName = useUserStore((state) => state.studentName);
  const clearUser = useUserStore((state) => state.clearUser);
  const { logout } = usePrivy();

  const formattedAddress = walletAddress
    ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
    : '[not logged]';

  const handleLogout = async () => {
    await logout();
    clearUser();
  };

  const handleCopyWallet = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress);
      toast.success('Endereço da carteira copiado!', {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center">
      {/* Container das infos do usuário */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-6">
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Wallet:&nbsp;{formattedAddress}&nbsp;
              {walletAddress && (
                <button
                  className="text-white hover:text-green-400"
                  onClick={handleCopyWallet}
                  title="Copiar endereço completo"
                >
                  <Copy size={18} />
                </button>
              )}
              </span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Aluno ID:&nbsp;{studentId || 'Carregando...'}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Nome:&nbsp;{studentName || 'Carregando...'}</span>
        </div>
      </div>

      {/* Botão logout colado à direita */}
      {walletAddress && (
        <div className="ml-auto">
          <button
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
