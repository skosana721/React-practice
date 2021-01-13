import React, { useState } from "react";
// useState -is a function
function UseStateBasics() {
  const [Heading, setHeading] = useState("Hooks");
  const handleClick = () => {
    Heading === "Hooks"
      ? setHeading("React Hooks Are Awesome!!!")
      : setHeading("Hooks");
  };
  return (
    <div className="container">
      <h2>{Heading}</h2>
      <button type="button" onClick={handleClick} className="btn">
        Change
      </button>
    </div>
  );
}

export default UseStateBasics;
