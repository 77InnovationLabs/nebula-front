import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { PrivyProvider } from '@privy-io/react-auth';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Providers } from "./provider";

function MyApp({ Component, pageProps }: AppProps) {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID as string;

  return (
    <PrivyProvider
      appId={appId}
      config={{
        loginMethods: ['email'], // você pode personalizar aqui: ['wallet', 'email']
        appearance: {
          theme: 'dark', // ou 'light'
        },
        embeddedWallets: {
          ethereum: {
            createOnLogin: 'all-users',
          },
        },
      }}
    >
      <Providers>
        <Navbar />
        <Component {...pageProps} />
        <ToastContainer position="top-right" autoClose={2000} />
      </Providers>
    </PrivyProvider>
  );
}

export default MyApp;
