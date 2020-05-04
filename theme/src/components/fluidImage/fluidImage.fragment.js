/**
 * Fluid image fragment.
 * See https://www.gatsbyjs.org/docs/graphql-reference/#fragments
 */
const fluidImageFragment = (maxWidth = 1000, quality = 90) => `
  image {
    alt_text
    source_url
    localFile {
      childImageSharp {
        fluid(maxWidth: ${maxWidth}, quality: ${quality}) {
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          presentationWidth
        }
      }
    }
  }
`
module.exports = fluidImageFragment;