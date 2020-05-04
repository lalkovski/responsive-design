const { getPostTemplatePath } = require('../helpers/utils');
const postDetailsFragment = require('../../src/components/postDetails/postDetails.fragment');

module.exports = ({ enabled, slugPrefix }) => {
  return {
    context: ({ node }) => ({ post: node, slug: node.slug }),
    enabled,
    errorMessage: `Unable to create WordPress posts`,
    nodes: ({ result }) => result.data.allWordpressPost.edges,
    query: `
      query GetAllPosts{
        allWordpressPost(sort: { fields: [date] }) {
          edges {
            node {
              slug
              ${postDetailsFragment()}
            }
          }
        }
      }
    `,
    slugPrefix,
    templatePath: getPostTemplatePath(),
  }
}
