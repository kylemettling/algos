/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	return nums.reduce((acc, curr, i) => {
		const except = nums.filter((n) => n != nums[i])
		return acc
	})
}

console.log(productExceptSelf([1, 2, 3, 4]))
console.log(productExceptSelf([-1, 1, 0, -3, 3]))
