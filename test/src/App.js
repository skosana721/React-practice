import React, { useState } from "react";
import "./App.css";
import Register from "./components/Register";
import LogIn from "./components/LogIn";

function App() {
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
    console.log("state", state);
  };
  return (
    <div className="App">
      <header className="App-header">Wongani's login Screen</header>
      <label className="switch">
        <p>Click to LogIn</p>
        <input type="checkbox" onClick={toggle} />
        <span className="slider round"></span>
      </label>
      {state === false ? <Register /> : <LogIn />}
    </div>
  );
}

export default App;
