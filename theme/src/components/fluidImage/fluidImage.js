import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const FluidImage = ({ localFile, source_url, alt_text, ...rest }) => {
  if(localFile && localFile.childImageSharp) {
    const { fluid } = localFile.childImageSharp;

    const style =
      fluid && fluid.presentationWidth ?
        { maxWidth: fluid.presentationWidth } : {};

    return <Img fluid={fluid} style={style} alt={alt_text} {...rest} />;
  }

  return <img src={source_url} alt={alt_text} {...rest} />;
}

FluidImage.propTypes = {
  localFile: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.object.isRequired
    }).isRequired
  }),
  source_url: PropTypes.string,
  alt_text: PropTypes.string,
}

export default FluidImage;