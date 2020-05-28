import fetch from 'isomorphic-unfetch';
import { ArticleType } from 'shared/types';

export const api = {
  getArticles: async (): Promise<ArticleType[]> => {
    const res = await fetch(`${process.env.BASE_URL}/articles`)
    return await res.json()
  },
  getArticle: async (id: string): Promise<ArticleType> => {
    const res = await fetch(`${process.env.BASE_URL}/articles/${id}`)
    return await res.json()
  },
}
