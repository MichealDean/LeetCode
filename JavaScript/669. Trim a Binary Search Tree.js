/**
 * Created by wxh_pc on 2017/10/16.
 */
/*
 Given a binary search tree and the lowest and highest boundaries as L and R, trim the tree so that all its elements lies in [L, R] (R >= L). You might need to change the root of the tree, so the result should return the new root of the trimmed binary search tree.

 Example 1:
    Input:
            1
           / \
          0   2
          L = 1
          R = 2
    Output:
             1
              \
               2

 Example 2:
    Input:
            3
           / \
          0   4
           \
             2
            /
           1
           L = 1
           R = 3

 Output:
            3
           /
          2
        /
       1
 */

/*
 二叉查找树（英语：Binary Search Tree），也称二叉搜索树、有序二叉树（英语：ordered binary tree），排序二叉树（英语：sorted binary tree），是指一棵空树或者具有下列性质的二叉树：
    1、若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值；
    2、若任意节点的右子树不空，则右子树上所有节点的值均大于它的根节点的值；
    3、任意节点的左、右子树也分别为二叉查找树；
    4、没有键值相等的节点。
    了解这个之后，就比较简单了
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
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
const trimBST = function(root, L, R) {
    if (!root) {
        return null
    }

    if (root.val < L) {
        return trimBST(root.right, L, R)
    } else if (root.val > R) {
        return trimBST(root.left, L, R)
    }

    root.left = trimBST(root.left, L, R)
    root.right = trimBST(root.right, L, R)

    return root
};