import { ArticleType } from 'shared/types'

const NEXT_PUBLIC_API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

export const api = {
  getArticles: async (): Promise<ArticleType[]> => {
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/articles`)
    return await res.json()
  },
  getArticle: async (id: string): Promise<ArticleType> => {
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/articles/${id}`)
    return await res.json()
  },
}
