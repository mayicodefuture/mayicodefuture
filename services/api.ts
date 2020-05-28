import { ArticleType } from 'shared/types'

const BASE_URL = process.env.BASE_URL || 'http://localhost:1337'

export const api = {
  getArticles: async (): Promise<ArticleType[]> => {
    const res = await fetch(`${BASE_URL}/articles`)
    return await res.json()
  },
  getArticle: async (id: string): Promise<ArticleType> => {
    const res = await fetch(`${BASE_URL}/articles/${id}`)
    return await res.json()
  },
}
