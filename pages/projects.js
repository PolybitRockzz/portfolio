import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Aos from 'aos'
import 'aos/dist/aos.css'

import coffee_ide_screenshot from '../public/screenshots/coffee_ide_screenshot.png'
import jarvis_desktop_code_screenshot from '../public/screenshots/jarvis_desktop_code_screenshot.png'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Projects.module.css'
import { useEffect } from 'react'

export default function Projects({ repos, projects }) {
    let githubData = 0
    let projectData = 0

    repos.map(() => {
        githubData = githubData + 1
    })
    projects.map(() => {
        projectData = projectData + 1
    })

	useEffect(() => {
		Aos.init({ duration: 500 })
	})

	return (
		<div className={styles.container}>
			<Head>
				<title>Projects | Swastik Biswas</title>
				<meta name="description" content="Hello World! I'm Swastik Biswas." />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charset="UTF-8" />
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>

			<Navbar />
			
			<div className={styles.banner}>

				<h1 data-aos={'fade-up'} className={styles.title}>
					My Projects
				</h1>

				<h3 data-aos={'fade-up'}>
					{projectData} Standalone Projects<br/>
					{githubData} GitHub Repositories
				</h3>

			</div>

			<div className={styles.svg + " " + styles.entry}></div>

            <div className={styles.projects}>
                <div className={styles.project + " " + styles.left}>
                    <Image data-aos={'fade-right'} src={coffee_ide_screenshot} alt="Coffee IDE Screenshot" />
                    <div data-aos={'fade-left'} className={styles.project_info}>
                        <h1>Coffee IDE</h1>
                        <p>Java, JSON</p>
                        <p>
                        A Java IDE for running and debugging Java applications and source code. 
                        Contains basic features like multi-file editing, syntax highlighting, compilation and running of Java files, etc. 
                        This is still in early open alpha phases and will undergo heavy improvements in the near future.
                        </p>
                        <h4 className={styles.version}>
                            Current Version: 0.1.2
                        </h4>
                        <Link href='https://github.com/PolybitRockzz/coffee-java-ide'><button className={styles.button}>View on GitHub</button></Link>
                    </div>
                </div>

                <div className={styles.svg + " " + styles.exit}></div>

                <div className={styles.project + " " + styles.right}>
                    <Image data-aos={'fade-left'} src={jarvis_desktop_code_screenshot} alt="Jarvis Desktop Code Screenshot" />
                    <div data-aos={'fade-right'} className={styles.project_info}>
                        <h1>JARVIS Desktop</h1>
                        <p>Python, Tensorflow</p>
                        <p>
                        A simple Python program for an Intelligent Desktop Assistant to help with the users' workflow. 
                        Inspired by Jarvis, a fictional AI assistant made by Tony Stark in the Marvel Cinematic Universe 
                        (Iron Man 2008 - Avengers: Age Of Utron 2015).
                        </p>
                        <h4 className={styles.version}>
                            Current Version: 0.1.1
                        </h4>
                        <Link href='https://github.com/PolybitRockzz/jarvis-desktop'><button className={styles.button}>View on GitHub</button></Link>
                    </div>
                </div>
            </div>

            <div className={styles.svg + " " + styles.entry}></div>

			<Footer />
		</div>
	)
}

export const getServerSideProps = async () => {
    const res1 = await fetch('https://api.github.com/users/PolybitRockzz/repos')
    const res2 = await fetch('https://pastebin.com/raw/fsEtm14Q')
    const data1 = await res1.json()
    const data2 = await res2.json()
    return {
        props: { repos: data1, projects: data2 }
    }
}