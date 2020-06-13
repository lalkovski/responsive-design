import React from "react"
import PropTypes from "prop-types"
// import Footer from "./footer"
// import Header from "./header"
import Main from "./main"

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <Main>{children}</Main>
      {/* <Footer /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout
