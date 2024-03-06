import React from "react";
import "./App.css";
import Canvas from "./components/canvas/Canvas";
import Channels from "./components/Channels";
function App() {
  return (
    <div className="App">
      <header>
        <div className="brand">
          <h3>Elaheh Arjomandi</h3>
        </div>
        <Channels />
      </header>
      <Canvas />
      <footer>
        <Channels />
        <p>© 2024</p>
      </footer>
    </div>
  );
}

export default App;
