import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    availableSections {
                        name
                        local
                    }
                }
            }
        }
    `
  )
  return site.siteMetadata
}