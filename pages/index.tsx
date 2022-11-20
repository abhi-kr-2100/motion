import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Motion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Motion
        </h1>

        <p className={styles.description}>
          Organize all aspects of your life at one place, at <i>light speed</i>.
        </p>

        <div className={styles.grid}>
          <Link href="/currently-reading" className={styles.card}>
            <h2>Currently Reading</h2>
            <p>A list of books you&rsquo;re currently reading, along with your progress on each.</p>
          </Link>

          <Link href="/watchlist" className={styles.card}>
            <h2>To Watch Next</h2>
            <p>Movies you&rsquo;ve added to your watchlist. Sort by various criteria to find your next movie.</p>
          </Link>

          <Link href="/todos" className={styles.card}>
            <h2>Todos</h2>
            <p>List of things you&rsquo;ve to do, along with details and timelines.</p>
          </Link>

          <Link href="/notes" className={styles.card}>
            <h2>Notes</h2>
            <p>
              Miscellaneous Markdown-powered notes.
            </p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/abhi-kr-2100" target="_blank" rel="noreferrer">
          Created by abhi-kr-2100
        </a>
      </footer>
    </div >
  )
}
