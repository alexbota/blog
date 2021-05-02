require('dotenv').config({ path: '.env' });
const { prismicRepo } = require('./prismic-configuration');
const linkResolver = require('./src/utils/linkResolver');

const reponame = process.env.GATSBY_PRISMIC_REPOSITORY_NAME || prismicRepo;
const apiKey = process.env.GATSBY_PRISMIC_ACCESS_TOKEN || accessToken;

const blogHomeSchema = require('./custom_types/bloghome.json');
const postSchema = require('./custom_types/post.json');

const gatsbySourcePrismicConfig = {
  resolve: 'gatsby-source-prismic',
  options: {
    repositoryName: reponame,
    accessToken: apiKey,
    lang: '*',
    prismicToolbar: true,
    linkResolver: () => (doc) => linkResolver(doc),
    schemas: {
      // Custom types mapped to schemas
      blogHome: blogHomeSchema,
      post: postSchema,
    },
  },
};

module.exports = {
  siteMetadata: {
    title: 'Alex Bota',
    description:
      'Alex Bota Web Developer, Create a professional website optimized for SEO',
    author: 'Alex Bota',
    siteUrl: 'https://alexbota.me/',
  },
  plugins: [
    gatsbySourcePrismicConfig,
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: 'en',
        langKeyForNull: 'en',
        prefixDefault: false,
        useLangKeyLayout: false,
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
