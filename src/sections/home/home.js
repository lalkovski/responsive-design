import React from "react"
import Collection from "../../components/collection"
import PropTypes from "prop-types"

const Home = ({ content }) => {
  return (
    <>
      <Collection props={content} />
    </>
  )
}

Home.propTypes = {
  content: PropTypes.object,
}

export default Home
