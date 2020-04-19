import fetch from 'isomorphic-unfetch';

export const api = {
  getArticles: async (): Promise<Response> => {
    const res = await fetch(`${process.env.BASE_URL}/articles`);
    return await res.json();
  },
  getGithubProfile: async (): Promise<Response> => {
    const res = await fetch("https://api.github.com/users/mayicodefuture");
    return await res.json();
  },
};
