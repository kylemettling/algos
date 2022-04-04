/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
	// starting values left and right
	let left = 0
	let right = nums.length - 1
	// while loop until middle is found or left/right break
	while (left <= right) {
		// each iteration new middle and current cursor established
		const middle = Math.floor((left + right) / 2)
		const current = nums[middle]
		// sides are progressed -/+ or middle is found
		if (current > target) {
			right = middle - 1
		} else if (current < target) {
			left = middle + 1
		} else {
			return middle
		}
	}
	return -1
}

console.log(search([-1, 0, 3, 5, 9, 12], 9))
console.log(search([-1, 0, 3, 5, 9, 12], 2))
