const authorFragment = require('../author/author.fragment');

/**
 * Page details inline fragment.
 * See https://www.gatsbyjs.org/docs/graphql-reference/#fragments
 */
const pageDetailsFragment = () => `
    ... on wordpress__PAGE {
        __typename
        id
        wordpress_id
        type
        title
        template
        status
        slug
        path
        modified
        menu_order
        link
        excerpt
        date
        content
        author {
            ${authorFragment()}
        }
        wordpress_parent
    }
`

module.exports = pageDetailsFragment;
