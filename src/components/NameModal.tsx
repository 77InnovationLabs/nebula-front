import React, { useState } from 'react';

interface NameModalProps {
  onSubmit: (name: string) => void;
}

const NameModal: React.FC<NameModalProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '0.5rem',
          width: '100%',
          maxWidth: '400px',
          boxShadow: '0 0 20px rgba(0,0,0,0.3)',
          position: 'relative',
        }}
      >
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}>
          Enter Your Name
        </h2>

        <p style={{ textAlign: 'center', fontSize: '0.9rem', marginBottom: '1rem', color: '#444' }}>
          Please enter your full name so we can register your participation.
        </p>

        <input
          type="text"
          placeholder="Type your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: '100%',
            padding: '0.5rem',
            marginBottom: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />

        <button
          onClick={() => onSubmit(name)}
          style={{
            width: '100%',
            backgroundColor: '#2563eb',
            color: '#fff',
            padding: '0.5rem',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default NameModal;
