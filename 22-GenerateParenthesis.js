/**
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

 */

/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
    const result = [];

    const dfs = (i, n, slate, oCount, cCount) => {

        // Backtrack cases
        if (oCount > n) return;
        if (cCount > oCount) return;


        if (i === n * 2) {
            result.push(slate.join(''));
            return;
        }

        slate.push('(');
        dfs(i + 1, n, slate, oCount + 1, cCount);
        slate.pop();

        slate.push(')');
        dfs(i + 1, n, slate, oCount, cCount + 1);
        slate.pop();
    }

    dfs(0, n, [], 0, 0);
    return result;
};

const n = 3;
console.log(generateParenthesis(n));