'use client';

import { useState } from 'react';
import {
  useWriteContract,
  useWaitForTransactionReceipt,
  useAccount,
  useChainId,
} from 'wagmi';
import { isAddress } from 'viem';
import { sepolia, avalancheFuji } from 'wagmi/chains';

interface ValidateProps {
  contractAddress: string;
  abi: Record<string, unknown>[]; // ✅ avoid any
  onSuccess?: () => void;
  validatorAddress?: string;
}

export default function Validate({
  contractAddress,
  abi,
  onSuccess,
  validatorAddress,
}: ValidateProps) {
  const [storageAddress, setStorageAddress] = useState(validatorAddress || '');
  const [error, setError] = useState('');
  const { address: account, isConnected } = useAccount();
  const chainId = useChainId();
  const currentChain =
    chainId === sepolia.id
      ? sepolia
      : chainId === avalancheFuji.id
      ? avalancheFuji
      : sepolia;

  const {
    data: hash,
    error: writeError,
    isPending: isWritePending,
    writeContract,
  } = useWriteContract();

  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    error: receiptError,
  } = useWaitForTransactionReceipt({ hash });

  const validateStorage = async () => {
    if (!storageAddress.trim()) {
      setError('Please enter the storage address.');
      return;
    }

    if (!isAddress(storageAddress)) {
      setError('Invalid address.');
      return;
    }

    if (!isConnected) {
      setError('Please connect your wallet first.');
      return;
    }

    setError('');

    try {
      writeContract({
        address: contractAddress as `0x${string}`,
        abi,
        functionName: 'validateStorage',
        args: [storageAddress as `0x${string}`],
        account,
        chain: currentChain,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Failed to send transaction.');
      } else {
        setError('Failed to send transaction.');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateStorage();
  };

  const resetForm = () => {
    setStorageAddress('');
    setError('');
  };

  const displayError = error || writeError?.message || receiptError?.message;
  const isLoading = isWritePending || isConfirming;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      <div
        style={{
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '2rem',
        }}
      >
        <h2 style={{ fontSize: '20px', marginBottom: '1rem' }}>Storage Validator</h2>

        {!isConnected && (
          <div
            style={{
              backgroundColor: '#fef9c3',
              border: '1px solid #fcd34d',
              padding: '1rem',
              borderRadius: '4px',
              marginBottom: '1rem',
              textAlign: 'center',
            }}
          >
            Please connect your wallet to validate.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label>Storage Contract Address</label>
          <input
            value={storageAddress}
            onChange={(e) => setStorageAddress(e.target.value)}
            placeholder="0x..."
            disabled={isLoading}
            style={{
              display: 'block',
              width: '100%',
              marginBottom: '1rem',
              padding: '0.5rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />

          <button
            type="submit"
            disabled={isLoading || !storageAddress || !isConnected}
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {isLoading ? 'Validating...' : 'Validate'}
          </button>
        </form>

        {displayError && (
          <div
            style={{
              marginTop: '1rem',
              backgroundColor: '#ffe6e6',
              border: '1px solid #f5c2c2',
              padding: '1rem',
              borderRadius: '4px',
            }}
          >
            {displayError}
          </div>
        )}

        {hash && (
          <div
            style={{
              marginTop: '1rem',
              backgroundColor: '#e6f7ff',
              border: '1px solid #91d5ff',
              padding: '1rem',
              borderRadius: '4px',
            }}
          >
            <div>
              Hash:{' '}
              <a
                href={`https://sepolia.etherscan.io/tx/${hash}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {hash.slice(0, 10)}...
              </a>
            </div>
            <div>
              Status:{' '}
              {isConfirmed
                ? '✅ Confirmed'
                : isConfirming
                ? '⏳ Confirming'
                : 'Sent'}
            </div>
            {isConfirmed && (
              <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                <button
                  onClick={() => {
                    resetForm();
                    onSuccess?.();
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#007bff',
                    cursor: 'pointer',
                  }}
                >
                  Validate another contract
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
