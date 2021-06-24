import "./styles.css";
import Board from "./components/Board";
import { useState } from "react";

export default function App() {
  const [history, setHistory] = useState([{ squares: Array(8).fill(null) }]);
  const [xIsNext, setTurn] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  function handleClick(value) {
    const historyCopy = history.slice(0, stepNumber + 1);
    const current = historyCopy[historyCopy.length - 1];
    const square = current.squares.slice();
    if (calculateWinner(square) || square[value]) {
      return;
    }
    square[value] = xIsNext ? "X" : "O";
    setHistory(historyCopy.concat([{ squares: square }]));
    setStepNumber(historyCopy.length);
    setTurn(!xIsNext);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const historyCopy = history;
  const current = historyCopy[stepNumber];

  function jumpTo(step) {
    setStepNumber(step);
    setTurn(step % 2 === 0);
  }

  const moves = historyCopy.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const winner = calculateWinner(current.squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="App">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
