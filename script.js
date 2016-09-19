// Fibonacci 

function findFiboSequence() {
	
	let first = 0,
		second = 1,
		third = 0,
		seq = 7;

	for ( let i = 1; i < seq; i++ ) {
		third = first + second;
		first = second;
		second = third;
	}

	console.log(third);

}

findFiboSequence();