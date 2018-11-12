// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

var twoSum = function (nums, target) {
  let hold = 0;
  let flip = true;
  while (flip) {
    for (let i = hold; i < nums.length; i++) {
      if (nums[hold] + nums[i + 1] === target) {
        return [hold, i + 1]
      }
    }
    hold++
  }
};

twoSum([2, 7, 1, 3], 9);