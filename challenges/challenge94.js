// 94. Binary Tree Inorder Traversal

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

var inorderTraversal = function (root) {
  let result = [];

  //      9
  //   4     20
  // 1  6  15  170

  function innerFunction(currentNode) {
    if (!currentNode) {
      return;
    }

    innerFunction(currentNode.left);

    result.push(currentNode.value);

    innerFunction(currentNode.right);
  }

  innerFunction(root);

  return result;
};
