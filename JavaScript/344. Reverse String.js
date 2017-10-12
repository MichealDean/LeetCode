/**
 * Created by wxh_pc on 2017/10/12.
 */

/*
 Write a function that takes a string as input and returns the string reversed.

 Example:
    Given s = "hello", return "olleh".
 */

/*
    One Line solution;
    这种简单的算法用脚本语言实现确是都比较容易，之后用Go或者C++再做一遍吧
 */

/**
 * @param {string} s
 * @return {string}
 */
const reverseString = function(s) {
    return s.split('').reverse().join('');
};
