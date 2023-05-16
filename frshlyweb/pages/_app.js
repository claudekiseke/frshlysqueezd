import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import '../styles/globals.css';


export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <meta charSet="utf-8" />       <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
      </Head>
    <main>
      <Component {...pageProps} />
      <Analytics />
    </main>
    </>
  );
}
