// Problem
// Write a function called 'same', which accepts two arrays. Function should return true if every value in array has its corresponding
// value squared in the second array. The frequency of values must be same.

// same([1,2,3], [4,1,9]) returns true
// same([1, 2, 3], [1, 4]) returns false
// same([1, 2, 1], [1, 4, 4]) returns false because frequencies must be the same.

// Naive solution using loops

function same(arr1, arr2) {
	// Eliminating the condition of arrays not being of same length
	if(arr1.length != arr2.length) {
		return false;
	}

	for(let i = 1; i < arr1.length; i++) {
		let correctIndex = arr2.indexOf(arr1[i]**2); // correct Index finds index of squared number in second array
		if(correctIndex == -1) {
			// if correctIndex or the index is not found (-1) return false
			return false;
		}
		arr2.splice(correctIndex, 1);
	}
	return true
}

console.log(same([1,2,1,2], [4, 4, 1])); //false
console.log(same([1,2,1,2], [4, 4, 1,1])); //True
