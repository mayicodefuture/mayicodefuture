import '../styles/index.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const { route } = useRouter();

  return (
    <>
      <Head>
        <title>
          {route.length > 2
            ? route.slice(1)[0].toUpperCase() + route.slice(2)
            : "Mayicodefuture"}
        </title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
