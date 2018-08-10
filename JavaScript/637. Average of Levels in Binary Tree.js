/**
 * Created by wxh_pc on 2017/10/17.
 */
/*
 Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

 Example 1:
    Input:
            3
           / \
          9  20
        /  \
       15   7
    Output: [3, 14.5, 11]
 Explanation:
    The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
 Note:
    The range of node's value is in the range of 32-bit signed integer.
 */

/*
    遍历一遍二叉树，记录每层的和以及层级，之后计算即可
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = function(root) {
    let count = [];
    let sum = [];
    let average = [];
    const loop = function (node, level) {
        if (!node) return;
        if (!sum[level]) sum[level] = 0;
        sum[level] += node.val;
        if (!count[level]) count[level] = 0;
        count[level]++;
        loop(node.left, level + 1);
        loop(node.right, level + 1);
    };
    loop(root, 0);
    for (let i = 0; i < count.length; i++) {
        average[i] = sum[i] / count[i];
    }
    return average;
};