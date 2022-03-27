import Head from 'next/head'
import Intro from '../components/Intro'
import styles from '../styles/Home.module.css'


export default function Home() {

  return (

    <div className={styles.container}>
      <Head>
        <title>PortFolio</title>
        <meta name='description' content='Portfolio website' />
        
      </Head>
      <Intro />
    </div>
  )
}




