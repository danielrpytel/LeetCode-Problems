/**
 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true

 */

/**
 * @param {string} s
 * @return {boolean}
 */

const s = "{]";

var isValid = function(s) {
    const stack = []; 
    const parenthesesMap = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    

    for (const paran of s) {
        if (parenthesesMap.hasOwnProperty(paran)) stack.push(paran);
        else {
            const closeParan = stack.pop();
            if (paran !== parenthesesMap[closeParan]) return false;
        }
    }

    return stack.length === 0;
};

console.log(isValid(s));