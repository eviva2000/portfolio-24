import React from "react";
import "./App.css";
import Canvas from "./components/canvas/Canvas";
function App() {
  return (
    <div className="App">
      <header>
        <div className="brand">
          <h3>Elaheh Arjomandi</h3>
        </div>
        <div className="channels">
          <img src="/github.svg" alt="" />
          <img src="/linkedin.svg" alt="" />
          <img src="/email.svg" alt="" />
        </div>
      </header>
      <Canvas />
      <footer>
        <p>© 2021</p>{" "}
      </footer>
    </div>
  );
}

export default App;
