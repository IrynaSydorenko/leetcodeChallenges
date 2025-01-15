// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

var devideAndConquer = function (nums) {
  let length = nums.length;

  if (length === 1) {
    return nums;
  }
  let middle = Math.floor(length / 2);
  let left = nums.slice(0, middle);
  let right = nums.slice(middle, length);

  return mergeAndSort(devideAndConquer(left), devideAndConquer(right));
};

function mergeAndSort(left, right) {
  // [2,3,145] [1,3,7,10] [1, 2, ]

  let leftIndex = 0;
  let rightIndex = 0;
  let mergedArray = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return mergedArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

function majorityElement(array) {
  // [1, 1, 1, 2, 2, 2, 2]
  const sorted = devideAndConquer(array);
  console.log(sorted);

  let mathMax = 0;
  let max = 1;

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) {
      max++;
    } else {
      mathMax = Math.max(max, mathMax);
      max = 1;
    }
  }

  mathMax = Math.max(max, mathMax);
  return mathMax;
}
// console.log(majorityElement([2, 2, 1, 1, 1, 1, 1, 1, 2, 2]));
