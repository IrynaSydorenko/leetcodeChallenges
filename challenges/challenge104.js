// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the
// longest path from the root node down to the farthest leaf node.

// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2

class binaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new binaryTreeNode(value);

    let current = this.root;

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    while (true) {
      if (current.value > newNode.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  lookup(value) {
    const currentNode = this.root;

    if (!this.root) {
      return false;
    }

    while (currentNode) {
      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else if (currentNode.value === value) {
        return currentNode;
      } else if (currentNode.value < value) {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  maxDepth() {
    // https://www.youtube.com/watch?v=p-eMCRpvbIY&t=405s - solution
    // DFS

    function innerFunction(root) {
      if (!root) {
        // Базовий випадок: повертаємо 0, якщо вузол порожній
        return 0;
      }

      //      9
      //   4     20
      // 1  6  15  170

      // Рекурсивно обчислюємо глибину лівої і правої гілок
      const leftDepth = innerFunction(root.left);
      const rightDepth = innerFunction(root.right);

      // Максимальна глибина + 1 для поточного вузла
      return Math.max(leftDepth, rightDepth) + 1;
    }

    return innerFunction(this.root);
  }
}

const tree = new BinarySearchTree();

//      9
//   4     20
// 1  6  15  170

tree.insert(3);
tree.insert(9);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

// console.log(tree.maxDepth());
