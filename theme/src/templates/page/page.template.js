import React from "react"
import Layout from "../../components/layout/layout"
import SectionsLoader from "../../components/sectionsLoader"
import PropTypes from "prop-types"

const PageTemplate = ({ pageContext }) => {
  const { page } = pageContext
  const className = `PAGE_${page.slug} ${page.__typename}`

  return (
    <Layout>
      <div className={className} id={page.slug} datatype={page.__typename}>
        <SectionsLoader sections={page.children} />
      </div>
    </Layout>
  )
}

PageTemplate.propTypes = {
  pageContext: PropTypes.object,
}

export default PageTemplate
