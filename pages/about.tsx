import Link from 'next/link'
import { useQuery, gql } from '@apollo/client'

const QUERY = gql`
  query {
    todo {
      id
    }
  }
`

function About() {
  const { data, loading, error } = useQuery(QUERY) 

  if  (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    console.log('error: ', error)
    return null
  }

  return (
    <>
      <h1>About</h1>
      <ul>
      {
        data.todo.map( (todo,index) => {
          return <li key={index}>{todo.id}</li>
        })
      }
      </ul>
      <Link href="/"><a>Home</a></Link>
    </>
  )
}

export default About

