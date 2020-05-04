import React from "react"

const PageDetails = ({ page }) => {
  return (
    <div>
      <h1>{page.title}</h1>
      <ul>
        <li>Date: <span>{page.date}</span></li>
        <li>Author: <span>{page.author.name}</span></li>
        <li>Template: <span>{page.template}</span></li>
      </ul>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </div>
  )
}

export default PageDetails;