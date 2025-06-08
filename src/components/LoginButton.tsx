import React from 'react';
import { usePrivy } from '@privy-io/react-auth';

const LoginButton: React.FC = () => {
  const { ready, authenticated, login, logout, user } = usePrivy();

  if (!ready) {
    return <button disabled>Loading...</button>;
  }

  if (authenticated) {
    return (
      <div className="flex items-center gap-4">
        <span>Welcome, {user?.wallet?.address}</span>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={logout}
        >
          Logout
        </button>
      </div>
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
