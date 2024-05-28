// Exercise:
// 1. Create a React class component
// 2. Pass in props (short for properties), similar to passing arguments to a JavaScript function. Both providing inputs to a piece of code.
// 3. Define prop types

import React, { Component } from "react";
import PropTypes from "prop-types";

class GreetingClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

GreetingClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string,
};

export default GreetingClassComponent;
