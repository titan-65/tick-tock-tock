import React from 'react';
import SquareBox from './SquareBox';

export default function Board() {
	return (
		<div>
			<div>
				<SquareBox />
				<SquareBox />
				<SquareBox />
			</div>
			<div>
				<SquareBox />
				<SquareBox />
				<SquareBox />
			</div>
			<div>
				<SquareBox />
				<SquareBox />
				<SquareBox />
			</div>
		</div>
	);
}
