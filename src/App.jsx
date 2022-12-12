import { useState } from "react";
import "./App.css";
import { Calculator } from "./components/Calculator";

function App() {
  return (
    <main className="main-content">
      <div>
        <h1 className="main-title">CALCULATOR</h1>
        <p className="main-description">
          Type anything you want to start calculating!
        </p>
      </div>
      <Calculator />
    </main>
  );
}

export default App;
