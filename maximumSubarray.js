/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	// initialize prev at zero and max as negative infinity
	let prev = 0
	let max = -Infinity

	// loop through nums array
	for (let i = 0; i < nums.length; i++) {
		// find prev - either previous element + current or new current is larger without the other
		prev = Math.max(prev + nums[i], nums[i])
		// establish new max between settled previous and current max
		max = Math.max(max, prev)
		console.log(prev, max)
	}
	return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
// console.log(maxSubArray([1]))
// console.log(maxSubArray([5, 4, -1, 7, 8]))
