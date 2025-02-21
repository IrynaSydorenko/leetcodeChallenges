// 53. Maximum Subarray

// Given an integer array nums, find the subarray with the largest sum, and return its sum.

var maxSubArray = function (nums) {
  // nums = [-2,1,-3,4,-1,2,1,-5,4]
  let total = 0;
  let res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    total = total > 0 ? total + nums[i] : 0;
    res += Math.max(total, res);
  }

  return res;
};
