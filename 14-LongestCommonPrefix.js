/**
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

 */

/**
 * @param {string[]} strs
 * @return {string}
 */

const strs = ["flower", "flow", "flight"]

var longestCommonPrefix = function(strs) {
    
    for (let i = 0; i <= strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) return strs[0].slice(0,i);
        }
    }

    return strs[0];
};

console.log(longestCommonPrefix(strs));