const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/pages/post.js');
    resolve(
      graphql(
        `
          {
            allPrismicArticle {
              edges {
                node {
                  id
                  slugs
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allPrismicArticle.edges;
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slugs[0]}/`,
            component: blogPost,
            context: {
              slug: post.node.id,
            },
          });
        });
      })
    );
  });
};
// const path = require('path');
//
// exports.createPages = async ({ reporter, actions, graphql }) => {
//   const { createPage } = actions;
//   const blogTemplate = path.resolve('src/templates/post/post.js');
//
//   // Query our blog posts
//   const result = await graphql(`
//     {
//       posts: allPrismicArticle {
//         edges {
//           node {
//             id
//             uid
//           }
//         }
//       }
//     }
//   `);
//
//   if (result.errors) {
//     reporter.panic(result.errors);
//   }
//
//   result.data.posts.edges.forEach(({ node }) => {
//     // Create a page for each blog post
//     createPage({
//       path: `/blog/${node.uid}`,
//       component: blogTemplate,
//       context: {
//         id: node.id,
//       },
//     });
//   });
// };
