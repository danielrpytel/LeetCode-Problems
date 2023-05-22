/**
 
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const hashmap = nums.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {});
      const sortedKeys = Object.keys(hashmap).sort((a, b) => hashmap[b] - hashmap[a]).map(Number);
      return k === 1 ? [sortedKeys[0]] : sortedKeys.slice(0, k)
};

const nums = [1,1,1,2,2,3];
const k = 2;
const result = topKFrequent(nums, k);
console.log(result);