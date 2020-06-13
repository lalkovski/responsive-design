import React from "react"
import Title from "../title"
import Description from "../description"
import Icon from "../icon"
import FluidImage from "../../../theme/src/components/fluidImage/fluidImage"
import "./collection.styles.scss"

const Collection = ({ props }) => {
  return props.map((collection, index) => (
    <div className="container" id={"id" + index} key={collection.title.title}>
      <div className={"inner-container " + collection.alignment}>
        <div className="text-container">
          <Icon
            icon={collection.icon.image.localFile.publicURL}
            alt={collection.title.title}
          />
          <div className="title">
            <Title title={collection.title.title} />
          </div>
          <div className="description">
            <Description description={collection.description.text} />
          </div>
        </div>
        <div className="image-container">
          <FluidImage
            className="img"
            src={collection.illustration.image.localFile.publicURL}
          />
        </div>
      </div>
    </div>
  ))
}

export default Collection
