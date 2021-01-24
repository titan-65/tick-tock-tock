import React, {useState} from 'react';
import SquareBox from './SquareBox/SquareBox';

export default function Board({gameState, handleSquareClick}) {
	
	
	const renderSquare = (position) => {
		return <SquareBox value={gameState[position]} handleButtonPress={() => handleSquareClick(position)}/>
	}
	
  return (
    <div className="board">
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
	  <div className="board-row">
	  {renderSquare(9)}
	  {renderSquare(10)}
	  {renderSquare(11)}
	</div>
    </div>
  );
}
