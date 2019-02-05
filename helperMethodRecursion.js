// Que: Collect all odd values from a given array using Helper Method Recursion

function collectAllOdds(arr) {
	result = [];

	function helper(helperInput) {
		if(helperInput.length === 0) {
			return;
		}
		if(helperInput[0] % 2 !== 0) {
			// Means it's not even ; It's odd.
			//Push into result array
			result.push(helperInput[0]);
		}
		// Shrink the array by 1; Delete the 0th element and repeat.
		helper(helperInput.slice(1))
	}
	helper(arr);
	console.log(result);
	return result;
}

collectAllOdds([4,3,5,6,7,8,5,3,2,3,4]);