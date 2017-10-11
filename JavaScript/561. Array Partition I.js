/**
 * Created by wxh_pc on 2017/10/11.
 */

/*
 Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

 Example 1:
    Input: [1,4,3,2]
    Output: 4
    Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).

 Note:
    n is a positive integer, which is in the range of [1, 10000].
    All the integers in the array will be in the range of [-10000, 10000].
 */

/*
    先排序，在相加就行了，读懂题目还是比较容易的
    需要注意的是js中sort() 方法在适当的位置对数组的元素进行排序，并返回数组。 sort 排序不一定是稳定的。默认排序顺序是根据字符串Unicode码点
    所以在进行排序的时候return a>b 就可能出现错误，return a-b（以这个运算结果返回可以）
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function(nums) {
    nums = nums.sort((a, b) =>{
        return a - b;
    })
    let sum = 0
    for (let i = 0; i< nums.length; i+=2) {
        sum += nums[i];
    }
    return sum;
};

