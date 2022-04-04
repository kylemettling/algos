/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	// input validation
	if (prices.length < 2) return 0
	// setting both tracking variables
	let max = 0
	let min = prices[0]
	// iterate over prices for-of since indices not relevant
	for (const price of prices) {
		// set max -> either tracked max or the current price minus tracked min
		max = Math.max(max, price - min)
		// set min -> either tracked min or current price
		min = Math.min(min, price)
	}
	return max
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
console.log(maxProfit([1, 2]))
