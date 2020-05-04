import React from 'react';
import PropTypes from 'prop-types';

import ExampleComponent from '../../components/exampleComponent';

const Example = (props) => {
  const { example } = props;
  return (
    <>
      <ExampleComponent {...example} />
    </>
  )
}

Example.propTypes = {
  example: PropTypes.shape({
    title: PropTypes.string,
  }),
}

export default Example;