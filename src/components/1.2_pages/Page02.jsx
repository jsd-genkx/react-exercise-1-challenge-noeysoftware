// Exercise:
// 1. Create a page 2
import React from "react";
import HelloAgain from "../1.1_myFirstReactComponent/02_FunctionalComponent";
function Page02() {
  return (
    <div>
      <h1>Page Two</h1>
      <p>This is the page Two.</p>
      <HelloAgain
        name="Person reading this"
        message="Do you like my website?"
      />
      <HelloAgain
        name="The ghost in the room"
        message="What did you have for lunch?"
      />
    </div>
  );
}

export default Page02;
