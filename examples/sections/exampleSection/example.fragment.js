const exampleComponentFragment = require('../../components/example/example.fragment');

/**
 * Hero Section inline fragment.
 * See https://www.gatsbyjs.org/packages/gatsby-source-wordpress/#query-with-acf-flexible-content
 */
module.exports = `
    ... on WordPressAcf_example {
        ${exampleComponentFragment()}
    }
`