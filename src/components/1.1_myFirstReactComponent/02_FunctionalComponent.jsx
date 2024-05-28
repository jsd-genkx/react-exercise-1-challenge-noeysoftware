// Exercise:
// 1. Create a React functional component
// 2. Pass in props (short for properties), similar to passing arguments to a JavaScript function. Both providing inputs to a piece of code.
// 3. Define prop types
import React from 'react';
import PropTypes from 'prop-types';

function HelloAgain(props) {
  return (
    <div>
      <h1>Hello again, {props.name}!</h1>
      <p>{props.message}</p>
    </div>
  );
}

HelloAgain.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.string,
  };

export default HelloAgain;