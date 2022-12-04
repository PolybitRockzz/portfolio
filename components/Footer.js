import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import Head from 'next/head'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
            </Head>
            <div className={styles.socials}>
                <Link href={'https://github.com/PolybitRockzz/'}><i className="devicon-github-original"></i></Link>
                <Link href={'https://twitter.com/PolybitRockzz'}><i className="devicon-twitter-original"></i></Link>
                <Link href={'https://linkedin.com/in/swastik-polybit-biswas'}><i className="devicon-linkedin-plain"></i></Link>
            </div>
            <p>© 2022 Swastik Biswas</p>
        </footer>
    )
}

export default Footer