import Head from "next/head";
import Intro from "../components/Intro";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PortFolio</title>
        <meta name="description" content="Portfolio website" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Cairo:wght@600&family=Crete+Round:ital@1&family=Noticia+Text:ital@1&family=Noto+Serif+Display:ital,wght@1,300&family=Playfair+Display:ital@1&family=Prata&family=Roboto&family=Source+Code+Pro&display=swap');
        </style>
      </Head>
      <Intro />
    </div>
  );
}
