require('dotenv').config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: 'Alex Bota',
    description:
      'Alex Bota Web Developer, Create a professional website optimized for SEO',
    author: 'Alex Bota',
    siteUrl: 'https://alexbota.me/',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.GATSBY_PRISMIC_ACCESS_TOKgEN,
        schemas: {
          page: require('./custom_types/blog_post.json'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://alexbota.me/',
        sitemap: 'https://alexbota.me/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-XR8TBZHRER',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
