import React from 'react';
import Head from 'next/head';

// Components Module Imports
import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <div style={{ backgroundColor: '#F2F0E4'}}>
            <Head>
                <title>Vancouver Sai Center -TESTING</title>
                <meta name="description" content="Vancouver Sai Center" />
                <meta name="keywords" content="Sai, Baba, Vancouver, Center" />
            </Head>
        </div>
    );
}
