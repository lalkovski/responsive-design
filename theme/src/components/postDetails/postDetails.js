import React from "react"

export default ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <ul>
        <li>Date: <span>{post.date}</span></li>
        <li>Author: <span>{post.author.name}</span></li>
        <li>Categories: <span>{post.categories.map(category => category.name)}</span></li>
      </ul>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}
