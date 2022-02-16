import type { NextPage } from 'next'
import { Header } from '../components/Meta/Header'
import styles from '../styles/modules/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div>
        home page
      </div>

    </div>
  )
}

export default Home
