/**
 * Created by wxh_pc on 2018/11/6.
 */

/**
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

 说明：本题中，我们将空字符串定义为有效的回文串。

 示例 1:

 输入: "A man, a plan, a canal: Panama"
 输出: true
 示例 2:

 输入: "race a car"
 输出: false
 */

/**
 * 这道题除了用经典的双指针法，还可以使用正则~
 */


/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    let s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (s[i] !== s[s.length - i - 1]) return false;
    }
    return true;
};