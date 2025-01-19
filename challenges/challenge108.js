// Given an integer array nums where the elements are sorted in ascending order, convert it to a
// height-balanced
// binary search tree.

// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var sortedArrayToBST = function (nums) {
  if (!nums || nums.length === 0) {
    // base case
    return null;
  }

  let start = 0;
  let end = nums.length - 1;
  const mid = Math.floor((start + end) / 2);
  let left = nums.slice(start, mid);
  let right = nums.slice(mid + 1);

  let node = new TreeNode(nums[mid]);
  node.left = sortedArrayToBST(left);
  node.right = sortedArrayToBST(right);

  console.log(node);
  return node;
};

// console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
