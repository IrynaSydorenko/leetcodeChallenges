// 53. Maximum Subarray

// Given an integer array nums, find the subarray with the largest sum, and return its sum.

var maxSubArray = function (nums) {
  // nums = [-2,1,-3,4,-1,2,1,-5,4]
  let total = 0;
  let res = nums[0];

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    res = Math.max(total, res);

    if (total < 0) {
      total = 0;
    }
  }

  return res;
};
