/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// Recursion
// var invertTree = function (root) {
//   if (root === null) return root;
//   [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];

//   return root;
// };
// Depth-first search
// function invertTree(root) {
//   // storing tree in stack array
//   const stack = [root];

//   // initialize while loop tied to stack length
//   while (stack.length) {
//     // take the last element
//     const n = stack.pop();
//     // if last element is not null
//     if (n !== null) {
//       // assign variables to swap
//       [n.left, n.right] = [n.right, n.left];
//       // push to stack
//       stack.push(n.left, n.right);
//     }
//   }
//   return root;
// }
function invertTree(root) {
  // storing tree in stack array
  const stack = [root];

  // initialize while loop tied to stack length
  while (stack.length) {
    // take the last element
    const n = stack.pop();
    // if last element is not null
    // if (n !== null) {
    // assign variables to swap
    //   [n.left, n.right] = [n.right, n.left];
    // push to stack
    // stack.push(n.left, n.right);
  }
  console.log(stack);
  //   }
  return root;
}
console.log(invertTree([4, 2, 7, 1, 3, 6, 9]));
console.log(invertTree([2, 1, 3]));
console.log(invertTree([]));
