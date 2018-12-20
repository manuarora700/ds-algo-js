// Coding in js -- Understand the problem + explore concrete examples
// + break it own + solve/simplify
// Write a function which takes a string and returns the character count of each letter.
// basic approach

function charCount(str) {
	let result = {};

	for(let i = 0; i < str.length; i++) {
		let char = str[i].toLowerCase(); // problem solved

		if(result[char] > 0) {
			result[char]++;
		}
		else {
			result[char] = 1;
		}
	}
	return result;
}

charCount("Hello");
console.log(charCount("Hello"));

console.log(charCount("Hello There"));
// Here uppercase 'H' is also displayed + whitespace too