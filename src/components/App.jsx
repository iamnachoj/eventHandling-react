import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");
  function changeInput(event) {
    return setName(event.target.value);
  }
  function submitClick() {
    return setHeading(name);
  }
  return (
    <div className="container">
      <h1>Hello {heading}!</h1>
      <input
        onChange={changeInput}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={submitClick}>Submit</button>
    </div>
  );
}

export default App;
