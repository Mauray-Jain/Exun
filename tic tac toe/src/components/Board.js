import Square from "./Square";
import "../components-style/Board.css";

export default function Board(props) {
  function renderSquare(value) {
    return (
      <Square value={props.squares[value]} onClick={() => props.onClick(value)}/>
    );
  }
  return (
    <>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  );
}
