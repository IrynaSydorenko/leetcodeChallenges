// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  class TrieNode {
    constructor() {
      this.child = Array(26).fill(null);
      this.wordEnd = false;
    }
  }

  const trie = new TrieNode();

  for (let i = 0; i < strs.length; i++) {
    let current = trie;

    for (let j = 0; j < strs[i].length; j++) {
      let index = strs[i].charCodeAt(j) - 'a'.charCodeAt(0);

      if (!current.child[index]) {
        let newNode = new TrieNode();

        current.child[index] = newNode; //тобто ми не вставляємо значення strs[i][j] а втавляємо ноду  oбʼєкт з масивом
      }
      current = current.child[index];
    }
    current.wordEnd = true;
  }

  let prefix = '';
  let current = trie;

  while (true) {
    let childrenCount = 0;
    let nextNode = null;
    let charIndex = -1;

    for (let i = 0; i < 26; i++) {
      if (current.child[i]) {
        childrenCount++;
        nextNode = current.child[i];
        charIndex = i;
      }
    }

    if (charIndex !== 1 || current.wordEnd) break;
  }

  prefix += String.fromCharCode(charIndex + 'a'.charCodeAt(0));
  current = nextNode;

  return prefix;
};

// можна просто брати перше слово та порівнювати його з іншими, перевіряючи, доки символи співпадають:

var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';

  let prefix = strs[0]; // Починаємо з першого слова

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1); // Видаляємо останню букву
      if (!prefix) return ''; // Якщо вже нічого не лишилось — повертаємо ""
    }
  }

  return prefix;
};
