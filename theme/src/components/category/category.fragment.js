/**
 * Post category fragment.
 * See https://www.gatsbyjs.org/docs/graphql-reference/#fragments
 */
const postCategoryFragment = () => `
  ... on wordpress__CATEGORY {
    name
    slug
  }
`
module.exports = postCategoryFragment;