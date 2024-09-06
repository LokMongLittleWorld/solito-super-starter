import 'raf/polyfill';
import 'setimmediate';

import { Provider } from 'app/provider';
import Head from 'next/head';
import React from 'react';
import type { SolitoAppProps } from 'solito';

import '../global.css';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Solito Super Starter</title>
        <meta name="description" content="Expo + Next.js with Solito. By Fernando Rojo." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <Toaster />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
