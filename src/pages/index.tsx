import React from 'react';
import LoginButton from '../components/LoginButton';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">NebulaQuest</h2>
      <h1 className="text-3xl font-bold mb-4">Empower Learning with On-Chain Certification Solutions</h1>
      <p className="text-3xl font-bold mb-4">Transform your educational offerings with our innovative platform that validates student skills through decentralized technology. Experience seamless integration and enhance your credibility with on-chain certificates.</p>
      <LoginButton />
    </div>
  );
};

export default HomePage;
