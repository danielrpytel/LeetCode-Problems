/*
You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.

*/

/**
 * @param {number[]} height
 * @return {number}
 */

const height = [1,8,6,2,5,4,8,3,7];

var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let max = 0;
    let area;

    while (i < j) {
        area = (j-i) * Math.min(height[i], height[j])

        max = Math.max(area, max);

        height[i] < height[j] ? i++ : j--
    }

    return max;
};

console.log(maxArea(height));