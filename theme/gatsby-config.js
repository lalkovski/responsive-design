/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const merge = require('deepmerge')
const defaultOptions = require('./gatsby/config/defaultOptions')
const assertConfig = require('./gatsby/config/assertConfig')
const { getAvailableSections } = require('./gatsby/helpers/utils');

module.exports = userOptions => {
  const options = merge(defaultOptions, userOptions)

  assertConfig(options)

  return {
    siteMetadata: {
      availableSections: getAvailableSections(),
    },
    plugins: [
      'gatsby-plugin-loadable-components-ssr',
      "gatsby-transformer-sharp",
      "gatsby-plugin-sharp",
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      {
        // WordPress source. See: https://www.gatsbyjs.org/packages/gatsby-source-wordpress/
        resolve: `gatsby-source-wordpress`,
        options: options.wordpress,
      },
    ]
  }
}
