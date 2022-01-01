import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");
  function changeInput(event) {
    return setName(event.target.value);
  }
  function submitClick(event) {
    setHeading(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {heading}!</h1>
      <form onSubmit={submitClick}>
        <input
          onChange={changeInput}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
