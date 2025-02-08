// Given an integer n, return the number of prime numbers that are strictly less than n.

// Example 1:
// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// Example 2:
// Input: n = 0
// Output: 0

// Example 3:
// Input: n = 1
// Output: 0

var countPrimes = function (n) {
  if (n < 2) return 0;

  let results = new Array(n).fill(true);
  results[0] = results[1] = false;

  for (let i = n - 1; i > 2; i--) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        results[i] = false;
      }
    }
  }

  return results.filter(Boolean).length;
};

var countPrimes = function (n) {
  if (n < 2) return 0;

  let results = new Array(n).fill(true);
  results[0] = results[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (results[i]) {
      for (let j = i * i; j < n; j += i) {
        if (i % j === 0) {
          results[j] = false;
        }
      }
    }
  }

  return results.filter(Boolean).length;
};
