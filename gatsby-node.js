const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicBloghome {
        nodes {
          url
          type
          lang
        }
      }
      allPrismicPost {
        nodes {
          id
          uid
          lang
          type
          url
        }
      }
    }
  `);

  pages.data.allPrismicBloghome.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/Blog.js'),
      context: { ...page },
    });
  });

  pages.data.allPrismicPost.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/Post.js'),
      context: { ...page },
    });
  });
};
