const categoryFragment = require('../category/category.fragment');
const authorFragment = require('../author/author.fragment');

/**
 * Post details inline fragment.
 * See https://www.gatsbyjs.org/docs/graphql-reference/#fragments
 */
const postDetailsFragment = () => `
    ... on wordpress__POST {
          id
          wordpress_id
          slug
          title
          content
          excerpt
          date
          modified
          type
          template
          sticky
          status
          path
          link
          format
          categories {
            ${categoryFragment()} 
          }
          author {
            ${authorFragment()}
          }
          parent {
            id
          }
          children {
            id
          }
        }
`

module.exports = postDetailsFragment;
