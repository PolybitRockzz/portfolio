import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <header className={styles.navbar}>
            <div className={styles.logo}>
                <a href="/"><h1>Swastik Biswas</h1></a>
            </div>
            <nav>
                <li><a href='/'>Home</a></li>
                <li><a href='/projects'>Projects</a></li>
                <li><a href='/timeline'>Timeline</a></li>
                <li><a href='/contact'>Contact</a></li>
            </nav>
            <a className={styles.cv} href="#"><button>Download CV</button></a>
        </header>
    )
}

export default Navbar