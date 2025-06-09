import React from 'react';
import { useUserStore } from '../store/useUserStore';

const Navbar: React.FC = () => {
  const walletAddress = useUserStore((state) => state.walletAddress);
  const studentId = useUserStore((state) => state.studentId);
  const studentName = useUserStore((state) => state.studentName);

  if (!walletAddress) {
    return (
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Wallet:</span>
          <span className="text-sm">&nbsp;[not logged]</span>
        </div>
      </nav>
    );
  }

  const formattedAddress = `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`;

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-sm font-semibold">Wallet:&nbsp;</span>
        <span className="text-sm">{formattedAddress}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold">Aluno ID:&nbsp;</span>
        <span className="text-sm">{studentId || 'Carregando...'}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold">Nome:&nbsp;</span>
        <span className="text-sm">{studentName || 'Carregando...'}</span>
      </div>
    </nav>
  );
};

export default Navbar;
