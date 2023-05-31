/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example:

Input: nums = [2,2,1]
Output: 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	if (nums.length === 1) return nums[0];

	let result = 0;

	nums.forEach((element) => {
		result = result ^ element;
	});

	return result;
};

const nums = [2, 2, 1];
const result = singleNumber(nums);

console.log(result);
