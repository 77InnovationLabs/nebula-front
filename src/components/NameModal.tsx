// src/components/NameModal.tsx
import React, { useState } from 'react';

interface NameModalProps {
  onSubmit: (name: string) => void;
}

const NameModal: React.FC<NameModalProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleConfirm = () => {
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl shadow-2xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Nome do Aluno</h2>
        <input
          type="text"
          placeholder="Digite seu nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={handleConfirm}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NameModal;
