export function calculateWinner(squares) {
	  const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[9, 10, 11],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9],
		[4, 7, 10],
		[5, 8, 11],
		[0, 4, 8],
		[2, 4, 6],
		[5, 7, 9],
		[3, 7, 11]
	  ];
	  for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
		  return squares[a];
		}
	  }
	  return null;
	}