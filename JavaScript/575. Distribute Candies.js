/**
 * Created by wxh_pc on 2017/10/13.
 */

/*
 Given an integer array with even length, where different numbers in this array represent different kinds of candies.
 Each number means one candy of the corresponding kind.
 You need to distribute these candies equally in number to brother and sister.
 Return the maximum number of kinds of candies the sister could gain.

 Example 1:
    Input: candies = [1,1,2,2,3,3]
    Output: 3
 Explanation: There are three different kinds of candies (1, 2 and 3), and two candies for each kind.
              Optimal distribution: The sister has candies [1,2,3] and the brother has candies [1,2,3], too.
              The sister has three different kinds of candies.

 Example 2:
    Input: candies = [1,1,2,3]
    Output: 2
    Explanation: For example, the sister has candies [2,3] and the brother has candies [1,1].
                 The sister has two different kinds of candies, the brother has only one kind of candies.

    Note:
    1、The length of the given array is in range [2, 10,000], and will be even.
    2、The number in given array is in range [-100,000, 100,000].
 */

/*
    1、妹妹最多可以有candies.length/2种糖果，如果糖果的种类不到这个值，则她也一定可以获得所有种类的糖果
    理清思路，注意对于js而言可以使用ES6的新特性，Set集合来处理去重
 */


/**
 * @param {number[]} candies
 * @return {number}
 */
const distributeCandies = function(candies) {
    return Math.min(new Set(candies).size, candies.length / 2);
};