import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <header className={styles.navbar}>
            <div className={styles.logo}>
                <a href="/"><h1>Swastik Biswas</h1></a>
            </div>
            <nav>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/projects'>Projects</Link></li>
                <li><Link href='/timeline'>Timeline</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
            </nav>
            <a className={styles.cv} href="#" target={'_blank'}><button>Download CV</button></a>
        </header>
    )
}

export default Navbar