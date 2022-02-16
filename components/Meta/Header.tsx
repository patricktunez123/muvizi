import type { NextPage } from 'next'
import Head from 'next/head'

export const Header: NextPage = () => {
    return (
        <Head>
            <title>MUVIZI</title>
            <meta name="description" content="Watch movies online for free" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}
