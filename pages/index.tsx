import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import HomeBanner from '../components/HomeBanner'
import EnjoyBanner from '../components/EnjoyBanner'
import LatestBanner from '../components/LatestBanner/LatestBanner'
import DonateBanner from '../components/DonateBanner'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Watch free movies with MUVIZI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HomeBanner />
        <EnjoyBanner />
        <LatestBanner />
        <DonateBanner />
      </Layout>
    </>
  )
}

export default Home
