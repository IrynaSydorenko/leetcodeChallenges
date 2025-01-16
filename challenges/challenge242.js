// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

var isAnagram = function (s, t) {
  // base case
  if (s.length !== t.length) {
    return false;
  }

  const hashMap = new Map();

  for (let i = 0; i < s.length; i++) {
    hashMap.set(s[i], (hashMap.get(s[i]) | 0) + 1);

    hashMap.set(t[i], (hashMap.get(t[i]) || 0) - 1);
  }

  for (let count of hashMap.values()) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
};

// console.log(isAnagram('anagram', 'nagaram'));
