import React, {useState} from 'react';
import Board from './components/Board';
import History from './components/History/History'
import { calculateWinner } from './helper'

import './styles/root.scss'
const App = () => {
  // const [gameState, setGameState] = useState(Array(12).fill(null))
  // const [isNextPlayer, setIsNextPlayer] = useState(false)
  
  const [gameState, setGameState] = useState([
    {board: Array(12).fill(null), isNextPlayer: true}
  ])
  
  const [currentMove, setCurrentMove] = useState(0)
  
  const current = gameState[currentMove]
  const winner = calculateWinner(current)
  
  // console.log('GameState:', gameState)
  const message = winner ? `Winner is ${winner}` : `Next player is ${current.isNextPlayer ? 'X' : 'O'}`
  
  const handleSquareClick = (position) => {
    // Checks it position already X already exists
    if (current.board[position] || winner) {
      return;
    }
    // Updates the gameState by mapping over the previous state based on the square and position
    setGameState((prevState) => {
      const lastState = prevState[prevState.length - 1]
      
      const updatedState = lastState.board.map((square, pos) => {
        if (pos === position) {
          return lastState.isNextPlayer ? 'X' : 'O'
        }
        return square
      })
      return prevState.concat({ board: updatedState, isNextPlayer: !lastState.isNextPlayer})
    })
    // setIsNextPlayer((prevState) => !prevState)
    setCurrentMove(prevState => prevState + 1)
  }
  
	return (
		<div className="app">
      <h1>Tick Tock</h1>
      <h2>{message}</h2>
			<Board gameState={current.board} handleSquareClick={handleSquareClick}/>
      <History gameState={gameState}/>
		</div>
	);
}
export default App