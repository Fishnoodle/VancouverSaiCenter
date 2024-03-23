import React from 'react';
import Head from 'next/head';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"]});

export default function Home() {
    return (
        <div>
            <Head>
                <title>Vancouver Sai Center -TESTING</title>
                <meta name="description" content="Vancouver Sai Center" />
                <meta name="keywords" content="Sai, Baba, Vancouver, Center" />
            </Head>
            <h1>Hello World</h1>
        </div>
    );
}
