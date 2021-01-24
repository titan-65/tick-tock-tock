import React from 'react';

export default function SquareBox({ value, handleButtonPress }) {
	
	// const handleButtonPress = () => {
	// 	console.log(value)
	// }
	return (
		<>
			<button type="button" className="square" onClick={handleButtonPress}>{value}</button>
		</>
	);
}
