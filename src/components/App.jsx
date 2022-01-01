import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  function handlingClick() {
    return setHeadingText("Submitted!");
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handlingClick}> Submit</button>
    </div>
  );
}

export default App;
