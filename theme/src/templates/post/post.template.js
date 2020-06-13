import React from "react"
import Layout from "../../components/layout/layout"
import PostDetails from "../../components/postDetails"
import PropTypes from "prop-types"

const PostTemplate = ({ pageContext }) => {
  const { post } = pageContext
  return (
    <Layout>
      <PostDetails post={post} />
    </Layout>
  )
}

PostTemplate.propTypes = {
  pageContext: PropTypes.object,
}

export default PostTemplate
