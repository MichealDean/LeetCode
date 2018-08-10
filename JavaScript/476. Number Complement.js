/**
 * Created by wxh_pc on 2017/10/12.
 */

/*
 Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

 Note:
    The given integer is guaranteed to fit within the range of a 32-bit signed integer.
    You could assume no leading zero bit in the integer’s binary representation.
 Example 1:
    Input: 5
    Output: 2
    Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
 Example 2:
    Input: 1
    Output: 0
    Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
 */

/*
    Easy难度，注意JS中二进制转化的问题即可。
    PS:使用JS来处理这种实际的问题显然是不合适的，用C++好的多~
 */

/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function(num) {
    let temp = '';
    let numStr = num.toString(2);
    for (let i = 0; i < numStr.length; i++) {
        if (numStr.charAt(i) === '0') {
            temp += '1';
        } else {
            temp += '0';
        }

    }
    return parseInt(temp, 2);
};
