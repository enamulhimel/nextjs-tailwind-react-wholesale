import '@/styles/globals.css';
import { StoreProvider } from '@/utilities/Store';
import { SessionProvider } from 'next-auth/react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider>
      <StoreProvider>
        <Component {...pageProps} />;
      </StoreProvider>
    </SessionProvider>
  );
}
