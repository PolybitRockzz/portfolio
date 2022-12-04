import Head from 'next/head'

import styles from '../styles/Timeline.module.css'

export default function Timeline() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Timeline | Swastik Biswas</title>
                <meta name="description" content="Hello World! I'm Swastik Biswas." />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charset="UTF-8" />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}