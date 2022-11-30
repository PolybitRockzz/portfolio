import Head from 'next/head'

import Aos from 'aos'
import 'aos/dist/aos.css'

import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function NotFound() {
	const router = useRouter()

	useEffect(() => {
		Aos.init({ duration: 500 })
		setTimeout(() => {
			router.push('/')
		}, 3000)
	}, [])

	return (
		<div className={styles.container}>
			<Head>
				<title>Page Not Found | Swastik Biswas</title>
				<meta name="description" content="My portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div data-aos={'fade-up'} className={styles.main}>

				<h1 className={styles.title}>
					Oops! Such empty!
				</h1>
				<p className={styles.description}>
					Looks like this page doesn't exist<br />
					Go back to the <a href='.'>Homepage</a>
				</p>
				<p className={styles.subtle}>
					You'll be redirected to the homepage in 3 seconds
				</p>

			</div>

		</div>
	)
}
