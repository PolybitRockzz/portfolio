import Head from 'next/head'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import styles from '../styles/Home.module.css'
import polybit from '../public/polybit.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Swastik Biswas</title>
        <meta name="description" content="swastik polybit biswas, portfolio, projects, contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.banner}>

        <Image src={polybit} className={styles.bannerImage} />

        <h1 className={styles.title}>
          Hello World!<br/>
          I'm Swastik Biswas.
        </h1>

        <div className={styles.typewriter}>
          <Typewriter
            loop
            cursor
            cursorStyle='█'
            typeSpeed={75}
            deleteSpeed={50}
            delaySpeed={1000}
            words={["A Student.", "A Developer.", "An Entrepreneur."]}
          />
        </div>

      </div>

      <div className={styles.svg + " " + styles.entry}></div>

      <div className={styles.aboutMe}>

        <h1 className={styles.title} style={{color: "#141414"}}>About Me</h1>

        <p className={styles.description} style={{color: "#141414"}}>
        Hello, world! I'm a 16-year-old computer and blockchain enthusiast.
         I'm a mostly self-taught developer for native desktop and web applications.
         I have keen enthusiasm in learning full-stack development, blockchain technology and cryptography.
         I am also the chief executive of a small association called The Junior Coders.
         My main motivation is to build my own presence in the digital world, one step at a time.
         I aspire to become an aerospace engineer in the future. 🚀
        </p>

      </div>

      <div className={styles.svg + " " + styles.exit}></div>

    </div>
  )
}
