import React from "react";

function Test({ title }) {
  console.log("values from props", title);
  return <div>{title}</div>;
}

export default Test;
