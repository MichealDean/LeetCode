/**
 * Created by wxh_pc on 2017/10/11.
 */

/*
 Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.
 You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node.
 Otherwise, the NOT null node will be used as the node of new tree.

 Example 1:
    Input:
    Tree 1                   Tree 2
             1                         2
            / \                       / \
           3   2                     1   3
          /                           \   \
         5                             4   7
 Output:
 Merged tree:
            3
           / \
          4   5
         / \   \
        5   4   7
 Note: The merging process must start from the root nodes of both trees.
 */

/*
    了解基本的二叉树知识，基本的递归即可,思路一样，参考了下别人的solution，让代码变得漂亮些
 */

// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
let mergeTrees = function(t1, t2) {
    if (t1 && t2) {
        const newNode = new TreeNode(t1.val + t2.val);
        newNode.left = mergeTrees(t1.left, t2.left);
        newNode.right = mergeTrees(t1.right, t2.right);
        return newNode;
    }
    return t1 || t2;
};