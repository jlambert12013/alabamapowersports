import { articles } from '../../../data'

export default function handler({ query: { id } }, res) {
  const filterById = articles.filter((article) => article.id === id)

  if (filterById.length > 0) {
    res.status(200).json(filterById[0])
  } else {
    res.status(404).json({ message: `Article with ID of ${id} was not found.` })
  }
}
