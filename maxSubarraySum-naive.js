function maxSubarraysum(arr, num) {

	if(arr.length < num) {
		return null;
	}
	let max = -Infinity;
	for(let i = 0; i < arr.length - num + 1; i++) {
		temp = 0;
		for(let j = 0; j < num; j++) {
			temp += arr[i + j];
		}
		if(temp > max) {
			max = temp;
		}
		console.log(temp, max);
	}
	console.log("Max sum is : ", max);
	return max;

}
maxSubarraysum([1,4,2,7,8,4,5,8,3,2,6,7], 2);