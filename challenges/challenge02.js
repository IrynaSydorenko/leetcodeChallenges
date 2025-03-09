// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.

function arrayDiff(a, b) {
  let hash = {};
  let result = [];

  for (let i = 0; i < b.length; i++) {
    if (!hash[b[i]]) {
      hash[b[i]] = 1;
    }
  }

  for (let i = 0; i < a.length; i++) {
    if (!hash[a[i]]) {
      result.push(a[i]);
    }
  }

  return result;
}

function arrayDiff(a, b) {
  let hash = new Set(b); // Use Set for faster lookups
  let result = [];

  for (let i = 0; i < a.length; i++) {
    if (!hash.has(a[i])) {
      // Check if a[i] is not in Set
      result.push(a[i]);
    }
  }

  return result;
}
