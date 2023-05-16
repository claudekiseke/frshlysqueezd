import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import '../styles/globals.css';


export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <meta charSet="utf-8" />       <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
        <script async defer src="https://tools.luckyorange.com/core/lo.js?site-id=b42e7fe9"></script>
      </Head>
    <main>
      <Component {...pageProps} />
      <Analytics />
    </main>
    </>
  );
}
