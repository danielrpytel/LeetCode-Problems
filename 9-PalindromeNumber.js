/*
Given an integer x, return true if x is a palindrome, and false otherwise.

An integer is a palindrome when it reads the same forward and backward.
121 is palindrome while 123 is not.

example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/

/**
 * @param {number} x
 * @return {boolean}
 */

let x = 121;

var isPalindrome = function(x) {
    if (x < 0) return false;

    let reverse = 0;
    let number = x;

    while (number > 0) {
        reverse = reverse * 10 + number % 10;
        number = Math.floor(number / 10);
    }

    return x === reverse;
};

console.log(isPalindrome(x));