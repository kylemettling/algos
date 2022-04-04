/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Brute Force
// var twoSum = function (nums, target) {
// 	// two loops, if either current num - target is the other num -> two sums found - return i, j
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = 1; j < nums.length; j++) {
// 			if (nums[i] === target - nums[j]) {
// 				return [i, j]
// 			}
// 		}
// 	}
// }
// Two-pass Object/Hashtable
// var twoSum = function (nums, target) {
// 	// two loops, if either current num - target is the other num -> two sums found - return i, j
// 	const table = {}
// 	for (let i = 0; i < nums.length; i++) {
// 		table[nums[i]] = i
// 	}
// 	for (let i = 0; i < nums.length; i++) {
// 		let complement = target - nums[i]
// 		if (table[complement] && table[complement] != i) {
// 			return [i, table[complement]]
// 		}
// 	}
// }

// One-pass Object/Hashtable
var twoSum = function (nums, target) {
	const table = {}
	for (let i = 0; i < nums.length; i++) {
		// const complement =
		if (table[nums[i]] >= 0) {
			return [table[nums[i]], i]
		}
		table[target - nums[i]] = i
	}
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
