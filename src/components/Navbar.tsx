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

  useEffect(() => {
    if (!studentId && router.pathname !== '/') {
      router.push('/');
    }
  }, [studentId, router]); // ✅ router as dependency

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
    <nav
      style={{
        backgroundColor: "#1f2937",
        color: "#fff",
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {walletAddress && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "14px", fontWeight: "600" }}>
              Wallet: {formattedAddress}
            </span>
            <button
              onClick={handleCopyWallet}
              title="Copy full address"
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                cursor: "pointer"
              }}
            >
              <Copy size={18} />
            </button>
          </div>
        )}

        {studentId && (
          <span style={{ fontSize: "14px", fontWeight: "600" }}>
            Student ID: {studentId}
          </span>
        )}

        {studentName && (
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "14px", fontWeight: "600" }}>
              Name: {studentName}
            </span>
            <button
              onClick={handleLogout}
              style={{
                padding: "0.25rem 0.75rem",
                backgroundColor: "#dc2626",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>

      <div
        style={{
          marginLeft: "auto",
          marginRight: "1rem",
          fontSize: "18px",
          fontWeight: "bold"
        }}
      >
        NebulaQuest
      </div>

      {walletAddress && (
        <div>
          <ConnectButton />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
