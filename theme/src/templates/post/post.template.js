import React from "react"
import Layout from "../../components/layout/layout"
import PostDetails from "../../components/postDetails"

const PostTemplate = ({ pageContext }) => {
  const { post } = pageContext;
  return (
    <Layout>
      <PostDetails post={post} />
    </Layout>
  )
}

export default PostTemplate;