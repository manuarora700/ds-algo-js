// Write a function validAnagram which takes 2 strings. Check if both the strings are anagrams or not.


// My solution -- using frequency counter.

function validAnagram(str1, str2) {
	if(str1.length != str2.length) {
		return false;
	}
	let arr1 = str1.split("");
	let arr2 = str1.split("");

	let counter1 = {};
	let counter2 = {};
 
	for(let val of arr1) {
		counter1[val] = (counter1[val] || 0) + 1;
	}
	for(let val of arr2) {
		counter2[val] = (counter2[val] || 0) + 1;
	}

	for(let key in counter1) {
		if(!(key in counter2)) {
			return false;
		}
	}
	return true;
}

console.log(validAnagram('manu', 'naxu'));