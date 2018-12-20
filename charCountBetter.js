function charCount(str) {
	let obj = {};
	for (let code of str) {
		if(isAlphaNumeric(char)) {
			char = char.toLowerCase();
			obj[char] = ++obj[char] || 1;
		}
	}
	return obj;
}

function isAlphaNumeric(char) {
	let code = char.charCodeAt(0);

	if(!(code > 47 && code < 58)) && // Numbers 0-9
		!(code > 64 && code < 91) && // a-z bade
		!(code > 96 && code < 123)) { //a-z chote
		return false;
	}
	return true;
	
}