import { useStaticQuery, graphql } from "gatsby"

export const useWpMetadata = () => {
  const { wpMetadata } = useStaticQuery(
    graphql`
        query {
            wpMetadata: wordpressSiteMetadata {
                name
                url
                home
                description
            }
        }
    `
  )
  return wpMetadata
}