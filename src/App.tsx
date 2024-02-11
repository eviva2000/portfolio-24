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
          <a href="https://github.com/eviva2000">
            <img src="/github.svg" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/elaheharjomandi/">
            <img src="/linkedin.svg" alt="" />
          </a>
          <a href="mailto:arjomandielaheh@gmail.com">
            <img src="/email.svg" alt="" />
          </a>
        </div>
      </header>
      <Canvas />
      <footer>
        <p>Made with 💙 by Elaheh </p> <p>© 2024</p>
      </footer>
    </div>
  );
}

export default App;
