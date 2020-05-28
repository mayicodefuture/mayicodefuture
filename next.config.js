module.exports = {
  exportPathMap: async function () {
    return {
      '/home': { page: '/home' },
      '/about': { page: '/about' },
      '/blog': { page: '/blog' },
      '/blog/1': { page: '/blog', query: { title: 'hello-world' } },
    }
  },
  env: {
    BASE_URL: 'http://localhost:1337',
  },
}
