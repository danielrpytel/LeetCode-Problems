/**
 Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
 Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const letterMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  }  
  const results = [];
  const dfs = (i, digits, slate) => {

    if (digits.length === 0) return [];

    if (i === digits.length) {
        results.push(slate.join(''));
        return;
    }

    let chars = letterMap[digits[i]];

    for (let char of chars) {
        slate.push(char);
        dfs(i + 1, digits, slate);
        slate.pop();
    }
  }

  dfs(0, digits, []);

  return results;
};