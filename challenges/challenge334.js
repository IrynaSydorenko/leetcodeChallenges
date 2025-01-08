// LeetCode
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

const span = document.querySelector('challenge334');

var reverseString = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start !== end) {
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }

  console.log(s);
};

// reverseString(['h', 'e', 'l', 'l', 'o']);
