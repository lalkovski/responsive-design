import React from "react"
import Layout from '../../theme/src/components/layout/layout';
import { graphql, Link } from "gatsby"

const PostItem = ({ node }) => {
  return (
    <>
      <h3>
        <Link to={`/${node.slug}`}>{node.title}</Link>
      </h3>
      <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </>
  )
}

const PostList = ({ edges }) => {
  return (
    <ul>
      {edges.map(({ node }) => (
        <li key={node.slug}>
          <PostItem node={node} />
        </li>
      ))}
    </ul>
  )
}

export default ({ data }) => {
  return (
    <Layout>
      <h1>Home</h1>
      <section>
        <h2>Pages</h2>
        <PostList edges={data.allWordpressPage.edges} />
      </section>
    </Layout>
  )
}
export const query = graphql`
  query {
    allWordpressPage(sort: { fields: [date] }) {
        edges {
            node {
                title
                excerpt
                slug
            }
        }
    }
  }
`
