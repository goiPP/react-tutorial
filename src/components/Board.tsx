import React from "react";
import "./Board.css"
import {Square} from "./Square";


function renderSquare(index: number) {
  return <Square index={index}/>;
}

export const Board: React.FC = () => {
  const status = 'Next player: X';
  return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
          {renderSquare(3)}
        </div>
        <div className="board-row">
          {renderSquare(4)}
          {renderSquare(5)}
          {renderSquare(6)}
          {renderSquare(7)}
        </div>
        <div className="board-row">
          {renderSquare(8)}
          {renderSquare(9)}
          {renderSquare(10)}
          {renderSquare(11)}
        </div>
      </div>
  );
}