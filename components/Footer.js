import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socials}>
                <Link href={'https://github.com/PolybitRockzz/'}><i className="devicon-github-original"></i></Link>
                <Link href={'https://twitter.com/PolybitRockzz'}><i className="devicon-twitter-original"></i></Link>
                <Link href={'https://www.reddit.com/user/PolybitRockzz'}><i className="devicon-linkedin-plain"></i></Link>
            </div>
            <p>© 2022 Swastik Biswas</p>
        </footer>
    )
}

export default Footer