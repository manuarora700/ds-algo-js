// Iterative
function factIterative(num) {
	let total = 1;
	for(let i = num; i > 1; i--) {
		total = total*i;
	}
	// return total;
	console.log("Factorial is : ", total);
}

// Recursive

function factRecursive(num) {
	if(num == 1) return 1;
	return num*factRecursive(num-1);
}

factIterative(4);
let answer = factRecursive(4);
console.log("Factorial Recursively is : ", answer);