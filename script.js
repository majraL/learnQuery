
// Fibonacci 

'use strict';

function findFiboSeq() {

	let first = 0,
		second = 1,
		third = 0,
		seq = document.getElementById('fibo').value;

	for ( let i = 1; i < seq; i++ ) {
		third = first + second;
		first = second;
		second = third;
	}

	/*document.getElementById('fibo').insertAdjacentHTML('afterend', third);*/
	document.getElementById('fiboSeq').innerHTML = `: (${seq}) =`;
	document.getElementById('fiboSeqL').insertAdjacentHTML('afterend', ` ${third}, `);
	document.getElementById('fibo').value = ``;

}