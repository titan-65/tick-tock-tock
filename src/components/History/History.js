import React from 'react'

const History = ({gameState}) => {
	console.log(gameState)
	return (
		<div className="history-wrapper">
		<ul className="history">
			{
				gameState.map((board, next) => {
					return (<li>
						<button className="btn" type="button">{
							next === 0 ? 'Start Game' : `Next move | #${next}`
						}</button>
					</li>)
				})
			}	
		</ul>
		</div>
	)
}

export default History