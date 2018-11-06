/**
 * Created by wxh_pc on 2018/11/6.
 */

/**
 * 示例 1:

 输入: 123
 输出: 321
 示例 2:

 输入: -123
 输出: -321
 示例 3:

 输入: 120
 输出: 21
 注意:

 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。根据这个假设，如果反转后的整数溢出，则返回 0。
 */

/**
 *  反转整数，需要注意的是js只有number类型的数字
 */


/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''), 10) * Math.sign(x);
    return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? reversed : 0;
};