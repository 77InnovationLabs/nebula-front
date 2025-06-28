import React, { useEffect } from 'react';
import { useUserStore } from '../store/useUserStore';
import { usePrivy } from '@privy-io/react-auth';
import { Copy } from 'lucide-react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { ConnectButton } from '@rainbow-me/rainbowkit';


const Navbar: React.FC = () => {
  const walletAddress = useUserStore((state) => state.walletAddress);
  const studentId = useUserStore((state) => state.studentId);
  const studentName = useUserStore((state) => state.studentName);
  const clearUser = useUserStore((state) => state.clearUser);
  const { logout } = usePrivy();
  const router = useRouter();

  // 🔐 Protege todas as rotas exceto a home
  useEffect(() => {
    if (!studentId && router.pathname !== '/') {
      router.push('/');
    }
  }, [studentId, router.pathname]);

  const formattedAddress = walletAddress
    ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
    : '';

  const handleLogout = async () => {
    await logout();
    clearUser();
    router.push('/');
  };

  const handleCopyWallet = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress);
      toast.success('Wallet address copied!', {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center">
      <div className="flex flex-col md:flex-row md:items-center md:gap-6">
        {walletAddress && (
          <div className="flex flex-row items-center gap-2">
            <span className="text-sm font-semibold">
              Wallet: {formattedAddress}&nbsp;
              <button
                className="text-white hover:text-green-400"
                onClick={handleCopyWallet}
                title="Copy full address"
              >
                <Copy size={18} />
              </button>
            </span>
          </div>
        )}

        {studentId && (
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Student ID: {studentId}</span>
          </div>
        )}

        {studentName && (
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Name: {studentName}&nbsp;
              <button
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
                onClick={handleLogout}
              >
                Logout
              </button>
            </span>
          </div>
        )}
      </div>

      <div className="ml-auto">NebulaQuest</div>

      {walletAddress && (
        <div className="ml-auto">
          <ConnectButton/>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
