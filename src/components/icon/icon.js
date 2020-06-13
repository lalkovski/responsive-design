import React from "react"
import PropTypes from "prop-types"

const Icon = ({ icon, alt }) => {
  return <img src={icon} alt={alt} />
}

Icon.propTypes = {
  icon: PropTypes.string,
  alt: PropTypes.string,
}

export default Icon
