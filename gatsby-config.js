/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const themeAirfleet = require('./gatsby/config/themeAirfleet')

module.exports = {
  plugins: [
    themeAirfleet(),
  ],
}
