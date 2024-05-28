// Exercise:
// 1. Create a React function component
// 2. Pass in props (short for properties), similar to passing arguments to a JavaScript function. Both providing inputs to a piece of code.
// 3. Define prop types

import React from 'react';
import PropTypes from 'prop-types';

function Hello({ name }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are cute.</p>
    </div>
  );
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Hello;