import ArticleItem from './ArticleItem'
import articleStyle from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyle.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </div>
  )
}
export default ArticleList
