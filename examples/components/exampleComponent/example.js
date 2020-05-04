import React from 'react';
import PropTypes from 'prop-types';

const Example = ({ title }) => {
  return <h1>{title}</h1>
}

Example.propTypes = {
  title: PropTypes.string,
}

export default Example;