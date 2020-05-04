/**
 * AirFleet theme config..
 *
 */

const dotenv = require('dotenv')

module.exports = () => {
  dotenv.config()

  return {
    resolve: require.resolve('../../theme'),
    options: {
      posts: {
        enabled: false,
        slugPrefix: ``,
      },
      pages: {
        enabled: true,
        slugPrefix: ``,
        customPages: [],
      },
      // WordPress source. See: https://www.gatsbyjs.org/packages/gatsby-source-wordpress/
      wordpress: {
        baseUrl: process.env.WP_BASE_URL,
        protocol: process.env.WP_PROTOCOL,
        auth: {
          htaccess_user: process.env.WP_AUTH_HTACCESS_USER,
          htaccess_pass: process.env.WP_AUTH_HTACCESS_PASS,
        },
        searchAndReplaceContentUrls: {
          sourceUrl: process.env.WP_SEARCH_AND_REPLACE_CONTENT_URLS_SOURCE_URL,
          replacementUrl: process.env.WP_SEARCH_AND_REPLACE_CONTENT_URLS_REPLACEMENT_URL,
        },
      },
    },
  }
}
