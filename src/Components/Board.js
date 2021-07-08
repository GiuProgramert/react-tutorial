import { Component } from "react";

import Square from "./Square";
import "../index.css";

class Board extends Component {
  renderSquare(i, paintLine) {
    return (
      <Square
        value={this.props.squares[i]}
        paintLine={paintLine}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  checkIfIsWinnerLine(winnerLine, squaresIndex) {
    return winnerLine ? 
      winnerLine[0] === squaresIndex ||
      winnerLine[1] === squaresIndex ||
      winnerLine[2] === squaresIndex : 
      false;
  }

  render() {
    const winnerLine = this.props.winnerLine ? this.props.winnerLine.slice() : null;
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0, this.checkIfIsWinnerLine(winnerLine, 0))}
          {this.renderSquare(1, this.checkIfIsWinnerLine(winnerLine, 1))}
          {this.renderSquare(2, this.checkIfIsWinnerLine(winnerLine, 2))}
        </div>
        <div className="board-row">
          {this.renderSquare(3, this.checkIfIsWinnerLine(winnerLine, 3))}
          {this.renderSquare(4, this.checkIfIsWinnerLine(winnerLine, 4))}
          {this.renderSquare(5, this.checkIfIsWinnerLine(winnerLine, 5))}
        </div>
        <div className="board-row">
          {this.renderSquare(6, this.checkIfIsWinnerLine(winnerLine, 6))}
          {this.renderSquare(7, this.checkIfIsWinnerLine(winnerLine, 7))}
          {this.renderSquare(8, this.checkIfIsWinnerLine(winnerLine, 8))}
        </div>
      </div>
    );
  }
}

export default Board;
