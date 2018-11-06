/**
 * Created by wxh_pc on 2018/11/6.
 */

/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。

 示例 1:

     输入: s = "anagram", t = "nagaram"
     输出: true
     示例 2:

     输入: s = "rat", t = "car"
     输出: false
     说明:
     你可以假设字符串只包含小写字母。

 进阶:
    如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 */

/**
 * 这道题对于js而言，可以使用js的特性非常清晰的处理，或者使用map来计算并保存每个字符出现的次数来做也可以
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    return s.split('').sort().toString() === t.split('').sort().toString();
};
