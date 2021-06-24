import "./styles.css";
import { useState } from "react";

export default function App() {
  let [variable, setVariable] = useState(0);
  function sub() {
    setVariable(variable - 1);
  }
  function add() {
    setVariable(variable + 1);
  }
  return (
    <div className="App">
      <button className="subtract" onClick={sub}>
        -
      </button>
      <span className="var">{variable}</span>
      <button className="add" onClick={add}>
        +
      </button>
    </div>
  );
}
