// src/pages/index.tsx
import React from 'react';
import LoginButton from '../components/LoginButton';

export default function Home() {
  return (
    <div style={styles.page}>
      <style>{`
        h1 {
          font-size: 2.8rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.1rem;
          max-width: 600px;
          text-align: center;
          margin: 0 auto 2rem auto;
          line-height: 1.6;
        }

        .buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .btn {
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          border: 2px solid black;
          cursor: pointer;
          background-color: white;
          transition: all 0.2s ease;
        }

        .btn.primary {
          background-color: black;
          color: white;
        }

        .btn.primary:hover {
          background-color: #333;
        }

        .btn.secondary:hover {
          background-color: #f0f0f0;
        }

        .login-wrapper {
          margin-top: 2rem;
          text-align: center;
        }
      `}</style>

      <h1>Empower Learning with On-Chain Certification Solutions</h1>
      <p>
        Transform your educational offerings with our innovative platform that validates student skills through decentralized technology. Experience seamless integration and enhance your credibility with on-chain certificates.
      </p>
      <div className="login-wrapper">
        <LoginButton />
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#ffffff',
    fontFamily: 'Arial, sans-serif',
  },
};
