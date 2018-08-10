/**
 * Created by wxh_pc on 2017/10/18.
 */

/*
 Given an array of integers, every element appears twice except for one. Find that single one.
 Note:
    Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 */

/*
    寻找单身数。。。。。。
    这道题常规思路很简单，但是加上了线性的运行时间和不使用额外的内存的限制后，就比较考验技术了
    利用异或运算来处理最完美~
    A ^ A = 0 and A ^ B ^ A = B.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    return nums.reduce((a, b) => a ^ b);
};
