// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

var generate = function (numRows) {
  let mn = [];
  if (numRows === 1) {
    mn.push([1]);
    return mn;
  }
  mn.push([1]);
  if (numRows > 1) {
    mn.push([1, 1]);
  }

  for (let i = 2; i < numRows; i++) {
    let temp = [1];
    for (let j = 1; j < mn[i - 1].length; j++) {
      temp.push(mn[i - 1][j - 1] + mn[i - 1][j]);
    }
    temp.push(1);
    mn.push(temp);
  }
  return mn;
};

// console.log(generate(5));
