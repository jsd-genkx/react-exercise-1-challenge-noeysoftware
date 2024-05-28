// Exercise:
// 1. Create a page 3
import React from "react";
import GreetingClassComponent from "../1.1_myFirstReactComponent/03_ClassComponent";
function Page03() {
  return (
    <div>
      <h1>Page Three</h1>
      <p>This is the page Three.</p>
      <GreetingClassComponent name="Cat" message="MEOW Meow" />
      <GreetingClassComponent name="Dog" message="Bok bok" />
    </div>
  );
}

export default Page03;
