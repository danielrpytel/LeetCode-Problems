/**
 Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let sub = haystack.substring(i, i + needle.length);
            if ( sub === needle) {
                return i;
            }
        }
    }

    return -1
};

const haystack = "sadbutsad";
const needle = "sad";

console.log(strStr(haystack, needle));