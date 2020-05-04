import React from "react"
import Footer from "./footer"
import Header from "./header"
import Main from "./main"

export default ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
