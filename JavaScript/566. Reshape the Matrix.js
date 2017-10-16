/**
 * Created by wxh_pc on 2017/10/16.
 */

/*
 In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.
 You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.
 The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.
 If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

 Example 1:
    Input:
        nums =
            [[1,2],
            [3,4]]
        r = 1, c = 4
 Output:
        [[1,2,3,4]]
 Explanation:
    The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.

 Example 2:
    Input:
        nums =
            [[1,2],
            [3,4]]
        r = 2, c = 4
    Output:
            [[1,2],
            [3,4]]
 Explanation:
    There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.
 Note:
    The height and width of the given matrix is in range [1, 100].
    The given r and c are all positive.
 */

/*
    回顾一下矩阵的知识
 */

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function(nums, r, c) {
    let m = nums.length;
    let n = nums[0].length;
    if (m*n !== r*c){
        return nums;
    }
    let ans = [], k;

    //构建空矩阵作为返回值
    for (let i = 0; i < r; i++){
        ans[i] = [];
        for (let j = 0; j < c; j++){
            ans[i][j] = 'undefined';
        }
    }

    //为空矩阵赋值
    for (let i =0; i < m; i++){
        for (let j = 0; j < n; j++){
            k = (i * n) + j;
            ans[Math.floor(k/c)][k%c] = nums[i][j];
        }
    }
    return ans;
};
