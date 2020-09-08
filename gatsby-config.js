module.exports = {
  siteMetadata: {
    title: `Front End Developer | Stefan Nieuwenhuis`,
    description: `I’m a freelance Frontend Developer specializing in React, Angular and Web Components`,
    author: '@stefannhs',
    routes: [
      {
        name: 'Home',
        path: '/',
      },
      {
        name: 'Services',
        path: '/services/',
      },
      {
        name: 'Blog',
        path: '/blog/',
      },
      {
        name: 'Contact',
        path: '/contact/',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
  ],
};