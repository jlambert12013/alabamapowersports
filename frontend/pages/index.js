import { server } from '../config/index'
// import Head from 'next/head'
import ArticleList from '../components/ArticleList'
// import styles from '../styles/Layout.module.css'

export default function Home({ articles }) {
  console.log(articles)
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()
//   return {
//     props: {
//       articles,
//     },
//   }
// }

// Same as above but using the API Routes.
export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:5000/api/inventory`)
  const articles = await res.json()
  return {
    props: {
      articles,
    },
  }
}
