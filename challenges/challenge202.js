// Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// Example 2:
// Input: n = 2
// Output: false

var isHappy = function (n) {
  let cache = {};
  let s = n + '';

  while (s !== '1') {
    let temp = 0;

    for (let i = 0; i < s.length; i++) {
      temp += (+s[i]) ** 2;
    }

    s = temp + '';

    if (s in cache) {
      return false;
    } else {
      cache[s] = 1;
    }
  }
  return true;
};

// console.log(isHappy(2));
