import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useGetQuestionsQuery } from '../gql/generated/graphql'

import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  const { data, loading, error } = useGetQuestionsQuery()

  if (loading) {
    return <div>loading</div>
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Architecture Quiz</title>
        <meta name="description" content="Architecture Quiz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Architecture Quiz</h1>
        <Link href={'/admin'} >admin</Link>

        <p className="text-2xl">tailwind</p>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
