let isValid = function (s) {
  // make lookup for parens
  const dict = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  // array for remaining unpaired parens
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]] == undefined) {
      // if the current value can't match as a pair, push the current value to arr
      arr.push(s[i]);
    } else {
      //
      // the last element of arr
      const last = arr.pop();
      // if the last element is not equal to
      if (dict[s[i]] !== last) {
        return false;
      }
    }
  }
  return arr.length === 0;
};
// var isValid = function (s) {
//   const b = {
//     ")": "(",
//     "]": "[",
//     "}": "{",
//   };
//   const a = [];
//   for (let i = 0; i < s.length; i++) {
//     if (b[s[i]] == undefined) {
//       a.push(s[i]);
//     } else {
//       const last = a.pop();
//       if (b[s[i]] !== last) {
//         return false;
//       }
//     }
//   }
//   return a.length === 0;
// };
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid(""));
