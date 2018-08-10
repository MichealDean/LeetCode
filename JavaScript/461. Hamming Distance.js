/**
 * Created by wxh_pc on 2017/10/11.
 */

/* The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
  Given two integers x and y, calculate the Hamming distance.

 Note:
 0 ≤ x, y < 231.

 Example:
    Input: x = 1, y = 4
    Output: 2

 Explanation:
    1   (0 0 0 1)
    4   (0 1 0 0)
           ↑  ↑
 The above arrows point to positions where the corresponding bits are different.
  */

/*
    hammingDistance是指两个字符串或者字不同字符的数量，
    对于整数，首先利用js的特性，按位异或，然后计算不同的字符数量
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
let hammingDistance = function(x, y) {
    let result = (x ^ y).toString(2);
    let distance = 0;
    for (let i = 0; i < result.length; i++) {
        if (result.charAt(i) === '1') distance++;

    }
    return distance;
};


/**
    看看人家的解法！竟然还有这种操作！
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
let hammingDistance2 = function(x, y) {
    return (x ^ y).toString(2).replace(/0/g, '').length;
};