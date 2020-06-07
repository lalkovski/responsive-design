import React from "react"
import PropTypes from "prop-types"

const Main = ({ children }) => {
  return <main>{children}</main>
}

Main.propTypes = {
  children: PropTypes.object,
}

export default Main
