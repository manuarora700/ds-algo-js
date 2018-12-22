// Write a function validAnagram which takes 2 strings. Check if both the strings are anagrams or not.

// Working solution -- not the best

function validAnagram(first, second) {
	if(first.length != second.length) {
		// Abort mission
		return false;
	}

	const lookup = {};
	for (let i = 0; i < first.length; i++) {
		let letter = first[i];

		// If letter exists -- increment. If not -- Create and set to 1
		lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
	}

	for(let i = 0; i < second.length; i++) {
		let letter = second[i];

		// cant find letter or the letter is zero then its not an anagram. Damn.
		if(!lookup[letter]) {
			return false;
		}
		else {
			lookup[letter] -= 1;
		}
	}
	return true;
}

console.log(validAnagram('manu', 'namu'));