/** Given the root of a binary tree, return the inorder traversal of its nodes' values.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const inorder = (node, res) => {
        if(node.left) inorder(node.left, res);
        res.push(node.val);
        if(node.right) inorder(node.right, res);
    }
    
    const ans = [];
    if(!root) return []
    inorder(root, ans);
    return ans;
};
