/**
 * Author inline fragment.
 * See https://www.gatsbyjs.org/docs/graphql-reference/#fragments
 */
const authorFragment = () => `
  ... on wordpress__wp_users {
    url
    slug
    name
    description
    avatar_urls {
      wordpress_96
      wordpress_48
      wordpress_24
    }
  }
`

module.exports = authorFragment;