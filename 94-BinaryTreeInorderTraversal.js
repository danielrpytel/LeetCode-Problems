/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: root = [1,null,2,3]
Output: [1,3,2]

*/
// My MakeTree function 
function makeTree(nodes) {
    if (!nodes || nodes.length === 0) {
        return null;
    }

    const root = new TreeNode(nodes[0]);
    const queue = [root];
    let i = 1;

    while (i < nodes.length) {
        const current = queue.shift();

        if (nodes[i] !== null) {
            const leftNode = new TreeNode(nodes[i]);
            current.left = leftNode;
            queue.push(leftNode);
        }

        i++;

        if (i < nodes.length && nodes[i] !== null) {
            const rightNode = new TreeNode(nodes[i]);
            current.right = rightNode;
            queue.push(rightNode);
        }

        i++;
    }

    return root;
}

// Definition for a binary tree node.
    function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }

// Answer

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = [];
    inOrder(root);
    function inOrder(root) {

        if (!root) {
            return null;
        }
        inOrder(root.left);
        res.push(root.val);
        inOrder(root.right);
    }
    return res;
};

// Testing

const rootNodes = [1, null, 2, 3];
const root = makeTree(rootNodes);
const result = inorderTraversal(root);
console.log(result);