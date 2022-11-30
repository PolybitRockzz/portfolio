import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Typewriter } from 'react-simple-typewriter'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import styles from '../styles/Home.module.css'
import polybit from '../public/polybit.png'
import { useEffect } from 'react'

export default function Home() {
	useEffect(() => {
		Aos.init({ duration: 500 })
	})

	const skillsExpertise = [
		{ key: "1", name: 'Java', icon: 'devicon-java-plain' },
		{ key: "2", name: 'Python', icon: 'devicon-python-plain' },
		{ key: "3", name: 'NextJS', icon: 'devicon-nextjs-plain' },
		{ key: "4", name: 'Unity', icon: 'devicon-unity-original' },
		{ key: "5", name: 'Firebase', icon: 'devicon-firebase-plain' },
	]
	const skillsLearning = [
		{ key: "6", name: 'Android', icon: 'devicon-androidstudio-plain' },
		{ key: "7", name: 'Arduino', icon: 'devicon-arduino-plain' },
		{ key: "8", name: 'C#', icon: 'devicon-csharp-plain' },
		{ key: "9", name: 'Tailwind', icon: 'devicon-tailwindcss-plain' },
	]

	return (
		<div className={styles.container}>
			<Head>
				<title>Home | Swastik Biswas</title>
				<meta name="description" content="Hello World! I'm Swastik Biswas." />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
			</Head>

			<Navbar />

			<div className={styles.banner}>

				<Image data-aos={'fade-down'} src={polybit} className={styles.bannerImage} />

				<h1 data-aos={'fade-up'} className={styles.title}>
					Hello World!<br />
					I'm Swastik Biswas.
				</h1>

				<div data-aos={'fade-up'} className={styles.typewriter}>
					<Typewriter
						loop
						cursor
						cursorStyle='█'
						typeSpeed={75}
						deleteSpeed={50}
						delaySpeed={1000}
						words={["A School Student.", "A Prodigy Developer.", "An Entrepreneur."]}
					/>
				</div>

			</div>

			<div className={styles.svg + " " + styles.entry}></div>

			<div className={styles.aboutMe}>

				<h1 data-aos={'fade-up'} className={styles.title}>About Me</h1>

				<p data-aos={'fade-up'} className={styles.description}>
					Hello, world! I'm a 16-year-old computer and blockchain enthusiast.
					I'm a mostly self-taught developer for native desktop and web applications.
					I have keen enthusiasm in learning full-stack development, blockchain technology and cryptography.
					I am also the chief executive of a small association called The Junior Coders.
					My main motivation is to build my own presence in the digital world, one step at a time.
					I aspire to become an aerospace engineer in the future. 🚀
				</p>

			</div>

			<div className={styles.svg + " " + styles.exit}></div>

			<div className={styles.skills}>

				<h1 data-aos={'fade-up'} className={styles.title}>Skills</h1>

				<div data-aos={'fade-up'} className={styles.skillsExt}>

					<h3>Well Experienced In</h3>
					<div className={styles.skillset}>
						{skillsExpertise.map((skill) => (
							<div key={skill.key} className={styles.skill}>
								<i className={skill.icon}></i>
								<p>{skill.name}</p>
							</div>
						))}
					</div>

				</div>

				<div data-aos={'fade-up'} className={styles.skillsExt}>

					<h3>Currently Learning</h3>
					<div className={styles.skillset}>
						{skillsLearning.map((skill) => (
							<div key={skill.key} className={styles.skill}>
								<i className={skill.icon}></i>
								<p>{skill.name}</p>
							</div>
						))}
					</div>

				</div>

			</div>

			<div data-aos={'fade-up'} className={styles.more}>
				<Link href='/projects'><button className={styles.button}>View Projects</button></Link>
				<Link href='/timeline'><button className={styles.button}>View My Timeline</button></Link>
			</div>

			<div className={styles.svg + " " + styles.entry}></div>

			<Footer />

		</div>
	)
}
