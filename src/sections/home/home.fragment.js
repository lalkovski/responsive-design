const titleFragment = require("../../components/title/title.fragment")
const descriptionFragment = require("../../components/description/description.fragment")
const iconFragment = require("../../components/icon/icon.fragment")

/**
 * Hero Section inline fragment.
 * See https://www.gatsbyjs.org/packages/gatsby-source-wordpress/#query-with-acf-flexible-content
 */
module.exports = `
  ... on WordPressAcf_feature {
        ${titleFragment()}
        ${descriptionFragment()}
        ${iconFragment()}
        illustration {
          image {
            localFile {
              publicURL
              }
            }
          }
          background {
            colors {
              color
              position
              opacity
              }
            angle
            opacity
            skew
            }
         }
  `