import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import entrySvg from '../public/entry1.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Swastik Biswas</title>
        <meta name="description" content="swastik polybit biswas, portfolio, projects, contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.main}>
        <h1 className={styles.title}>
          Hello World!<br/>
          I'm Swastik Biswas.
        </h1>

        <p className={styles.description}>
          Student | Developer | Designer
        </p>
      </div>

      <div className={styles.svg}>
        <Image src={entrySvg} alt={"Curves"}/>
      </div>

    </div>
  )
}
