import fetch from 'isomorphic-unfetch';

const baseUrl = "http://localhost:1337";

export const api = {
  getArticles: async (): Promise<Response> => {
    const res = await fetch(`${baseUrl}/articles`);
    return await res.json();
  },
  getGithubProfile: async (): Promise<Response> => {
    const res = await fetch("https://api.github.com/users/mayicodefuture");
    return await res.json();
  },
};
