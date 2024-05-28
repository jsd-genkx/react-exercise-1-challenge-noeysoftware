// Exercise:
// 1. Create a page 1
import React from "react";
import Hello from "../1.1_myFirstReactComponent/01_FunctionComponent";

function Page01() {
  return (
    <div>
      <h1>Page One</h1>
      <p>This is the page one.</p>
      <Hello name="A person reading this" />
    </div>
  );
}

export default Page01;
