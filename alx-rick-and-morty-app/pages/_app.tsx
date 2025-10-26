import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorProneComponent from '@/components/ErrorProneComponent';
import type { AppProps } from "next/app";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
      <ErrorProneComponent />
    </ErrorBoundary>
  );
}

export default MyApp;