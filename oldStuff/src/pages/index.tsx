import React from 'react';
import LoginButton from '../components/LoginButton';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Nebula Learning App</h1>
      <h3 className="text-3xl font-bold mb-4">powered by 77 Innovation Labs</h3>
      <LoginButton />
    </div>
  );
};

export default HomePage;
