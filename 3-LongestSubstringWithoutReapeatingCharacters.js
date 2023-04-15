/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

*/

/**
 * @param {string} s
 * @return {number}
 */

let s = "abcabcbb"

var lengthOfLongestSubstring = function(s) {
    var k = 0;
    var maxLength = 0;

    for(i = 0; i < s.length; i++) {
        for (j = k; j < i; j++) {
            if (s[i] === s[j]) {
                k = j + 1;
                break;
            }
        }
        if (i - k + 1 > maxLength) {
            maxLength = i - k + 1;
        }
    }
    return maxLength;
};

console.log(lengthOfLongestSubstring(s));

