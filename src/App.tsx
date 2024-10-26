import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Sua Foto!</p>
      </header>
      <div className="Texto">
        <p>Uma foto para você!</p>
        <img
          src={`https://picsum.photos/300/400?grayscale`}
          className="foto"
          alt="foto"
        />
      </div>
    </div>
  );
}

export default App;
