// https://leetcode.com/problems/cousins-in-binary-tree/submissions/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

const isCousins = (root, x, y) => {
    // parse the array of root
    // check the parent of each node.
    // convert the root into an array;
    
    if (!root) {
        return false;
    }
    let parentX = null;
    let parentY = null;
    let depthX = -1;
    let depthY = -1;

    const traverseNode = (node, depth, callback) => {
        if (node !== null) {
            callback(node, depth, node.left);
            callback(node, depth, node.right);
            traverseNode(node.left, depth+1, callback);
            traverseNode(node.right, depth+1, callback);
        }
    }
    
    traverseNode(root, 1, (parent, depth, node) => {
        if (node && node.val === x) {
            parentX = parent.val;
            depthX = depth;
        }
        if (node && node.val === y) {
            parentY = parent.val;
            depthY = depth;
        }
    })
    
    return depthX === depthY && parentX !== parentY;
};


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.right = new TreeNode(3);
root.left.right.right = new TreeNode(4);
root.left.right.right.left = new TreeNode(5);

console.assert(isCousins(root, 3, 4) === false);

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
console.assert(isCousins(root2, 4, 3) === false);

const root3 = new TreeNode(1);
root3.left = new TreeNode(2);
root3.right = new TreeNode(3);
root3.left.right = new TreeNode(4);
root3.right.right = new TreeNode(5);
console.assert(isCousins(root3, 4, 5) === true);

const root4 = new TreeNode(1);
root4.left = new TreeNode(2);
root4.right = new TreeNode(3);
root4.left.right = new TreeNode(4);
console.assert(isCousins(root4, 2, 3) === false);