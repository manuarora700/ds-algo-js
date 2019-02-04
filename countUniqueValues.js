// Implement a function countUniqueValues which accepts a sorted array and counts the unique values in the array.
// There can be negative numbers in the array but will always be sorted.
// Approack - Multiple pointers

// If manipulating the original array is available.

// O(n) time complexity

function countUniqueValues(arr) {
	if(arr.length == 0) return 0;
	let i = 0; // stays at 0 index -- increments if a new value is found
	for(let j = 1; j < arr.length; j++) {
		// looks for new values
		if(arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
}

// //     i
// 	[1,1,2,3,3,4,5,6,6,7]
// //	     j
console.log(countUniqueValues([1,1,1,1,1,1,1]));