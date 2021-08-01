import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { gql } from '@apollo/client'
import client from '../apoclient'
import Link from 'next/link'

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query GetTodo {
        todo {
          id
        }
      }
    `,
  })
  return {
    props: {
      todo: data.todo
    }
  }
}

export default function Home( { todo }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <div>
        <Link href="/about"><a>About page</a></Link>
      </div>


      <h1>TODO</h1>
      <ul>
      {
        todo.map( (todo,index) => {
          return <li key={index} >{todo.id}</li>
        })
      }
      </ul>

    </div>
  )
}
