import Image from 'next/image'
import Link from 'next/link'
import articleStyle from '../styles/Article.module.css'

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={articleStyle.card}>
        <h3>{article.condition}</h3>
        <p>{article.make}</p>
        <p>{article.model}</p>
        {article.images.map((item) => console.log(item))}
      </a>
    </Link>
  )
}

export default ArticleItem
