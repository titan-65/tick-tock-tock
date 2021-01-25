import React from 'react'

const History = ({gameState}) => {
	console.log(gameState)
	return (
		<div>
		<ul>
			{
				gameState.map((board, next) => {
					return (<li>
						<button type="button">{
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