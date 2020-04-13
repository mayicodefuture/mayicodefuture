import fetch from 'isomorphic-unfetch';

const githubApiUrl = "https://api.github.com";

export const githubApi = {
  getProfile: async (): Promise<Response> => {
    const res = await fetch(`${githubApiUrl}/users/mayicodefuture`);
    return await res.json();
  },
};
