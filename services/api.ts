import { ArticleType } from 'shared/types'

const API_URL = process.env.API_URL

export const api = {
  getArticles: async (): Promise<ArticleType[]> => {
    const res = await fetch(`${API_URL}/articles`)
    return await res.json()
  },
  getArticle: async (id: string): Promise<ArticleType> => {
    const res = await fetch(`${API_URL}/articles/${id}`)
    return await res.json()
  },
}
