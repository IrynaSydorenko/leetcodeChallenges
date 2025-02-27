// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let leftIndex = 0;
  let maxLength = 0;

  // sliding window;
  // "abcabcbb"
  // "pwwkew"

  for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {
    while (set.has(s[rightIndex])) {
      set.delete(leftIndex);
      leftIndex++;
    }

    set.add(rightIndex);
    maxLength = mathMax(max, rightIndex - leftIndex + 1);
  }

  return maxLength;
};

// console.log(lengthOfLongestSubstring('pwwkew'));
