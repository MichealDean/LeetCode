/**
 * Created by wxh_pc on 2017/10/18.
 */

/*
 Given a binary array, find the maximum number of consecutive 1s in this array.

 Example 1:
    Input: [1,1,0,1,1,1]
 Output: 3
    Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.

 Note:
    The input array will only contain 0 and 1.
    The length of input array is a positive integer and will not exceed 10,000
 */

/*
    循环记录一遍即可,看清楚是记录出现的1的最大长度！
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function(nums) {
    let lengths = 0;
    let temp = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] && nums[i] === 1){
            temp++;
            lengths = lengths > temp? lengths:temp;
        }else {
            temp = 0;
        }
    }
    return  lengths
};
