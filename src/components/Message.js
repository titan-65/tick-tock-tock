import React from 'react'

const Message = ({winner}) => {
	return (
		<div className="status-message">{winner && `Winnner is ${winner}`}</div>
	)
}
export default Message