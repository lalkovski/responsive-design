import React from "react"
import PropTypes from "prop-types"

const Description = ({ description }) => {
  return <div dangerouslySetInnerHTML={{ __html: description }}></div>
}

Description.propTypes = {
  description: PropTypes.string,
}

export default Description
