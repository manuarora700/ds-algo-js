// Problem
// Write a function called 'same', which accepts two arrays. Function should return true if every value in array has its corresponding
// value squared in the second array. The frequency of values must be same.

// same([1,2,3], [4,1,9]) returns true
// same([1, 2, 3], [1, 4]) returns false
// same([1, 2, 1], [1, 4, 4]) returns false because frequencies must be the same.

// Better solution using frequency counter

// Since two separate loops are way better than 2 nested loops, we iterate two objects individually (two arrays individually)\

// Time complexity - O(n)
function same(arr1, arr2) {
	if(arr1.length!= arr2.length) {
		return false;
	}
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	for(let val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; 
	}
	for(let val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1; 
	}

	for(let key in frequencyCounter1) {
		if(!(key**2 in frequencyCounter2)) {
			return false;
		}
		if(frequencyCounter2[key**2] != frequencyCounter1[key]) {
			return false;
		}
	}
	return true;
}

console.log(same([4, 3, 2], [9, 16, 4]));