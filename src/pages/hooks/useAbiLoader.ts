import { useState, useEffect } from 'react';

type Network = 'sepolia' | 'avalancheFuji';

interface UseAbiLoaderResult {
  abi: Record<string, unknown>[] | null;
  loading: boolean;
  error: string | null;
}

export function useAbiLoader(address: string, network: Network): UseAbiLoaderResult {
  const [abi, setAbi] = useState<Record<string, unknown>[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!address || !network) return;

    const fetchAbi = async () => {
      try {
        setLoading(true);
        setError(null);

        let url = '';

        if (network === 'sepolia') {
          const apiKey = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY;
          url = `https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=${apiKey}`;
        } else if (network === 'avalancheFuji') {
          const apiKey = process.env.NEXT_PUBLIC_SNOWTRACE_API_KEY;
          url = `https://api.snowtrace.io/api?module=contract&action=getabi&address=${address}&apikey=${apiKey}`;
        }

        const res = await fetch(url);
        const data: { status: string; result: string } = await res.json();

        if (data.status === "1") {
          setAbi(JSON.parse(data.result));
        } else {
          console.warn("ABI not found on explorer, attempting fallback...");
          await loadFallbackAbi();
        }
      } catch (err: unknown) {
        console.error("Error fetching ABI from explorer, using fallback...", err);
        await loadFallbackAbi();
      } finally {
        setLoading(false);
      }
    };

    const loadFallbackAbi = async () => {
      try {
        const res = await fetch('/fallback_abi.json');
        const fallbackAbi = await res.json();
        setAbi(fallbackAbi);
        setError("Loaded fallback ABI because the contract was not found or not verified on the explorer.");
      } catch (fallbackErr) {
        console.error("Error loading fallback ABI", fallbackErr);
        setError("Failed to load fallback ABI.");
      }
    };

    fetchAbi();
  }, [address, network]);

  return { abi, loading, error };
}
