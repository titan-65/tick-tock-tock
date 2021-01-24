import React, {useState} from 'react';
import Board from './components/Board';
import { calculateWinner } from './helper'

import './styles/root.scss'
export default function App() {
  const [gameState, setGameState] = useState(Array(12).fill(null))
  const [isNextPlayer, setIsNextPlayer] = useState(false)
  
  const winner = calculateWinner(gameState)
  
  const message = winner ? `Winner is ${winner}` : `Next player is ${isNextPlayer ? 'X' : 'O'}`
  
  const handleSquareClick = (position) => {
    // Checks it position already X already exists
    if (gameState[position] || winner) {
      return;
    }
    // Updates the gameState by mapping over the previous state based on the square and position
    setGameState((prevState) => {
      return prevState.map((square, pos) => {
        if (pos === position) {
          return isNextPlayer ? 'X' : 'O'
        }
        return square
      })
    })
    setIsNextPlayer((prevState) => !prevState)
  }
  
	return (
		<div className="app">
      <h1>Tick Tock</h1>
      <h2>{message}</h2>
			<Board gameState={gameState} handleSquareClick={handleSquareClick}/>
		</div>
	);
}
