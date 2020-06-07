/* eslint-disable react/display-name */
import React from "react"
import Layout from "../../theme/src/components/layout/layout"
import Home from "../sections/home/home"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import "./index.scss"

const Index = ({ data }) => {
  const content = data.allWordpressPage.edges[0].node.children
  return (
    <Layout>
      <Home content={content} />
    </Layout>
  )
}

Index.propTypes = {
  data: PropTypes.object,
}

export default Index

export const query = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          slug
          ... on wordpress__PAGE {
            id
            children {
              id
              ... on WordPressAcf_feature {
                title {
                  title
                }
                description {
                  text
                }
                icon {
                  image {
                    localFile {
                      publicURL
                    }
                  }
                }
                illustration {
                  image {
                    localFile {
                      publicURL
                    }
                  }
                }
                alignment
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
            }
          }
        }
      }
    }
  }
`
