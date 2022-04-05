/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	if (s.length != t.length) {
		return false
	}
	const dict = {}
	for (let i = 0; i < s.length; i++) {
		dict[s[i]] = dict[s[i]] + 1 || 0
		dict[t[i]] = dict[t[i]] - 1 || 0
	}
	return dict
}

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))
console.log(isAnagram('ticket', 'artwork'))
