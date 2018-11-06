/**
 * Created by wxh_pc on 2018/11/6.
 */


/**
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

 案例:
     s = "leetcode"
     返回 0.

     s = "loveleetcode",
     返回 2.

 注意事项：您可以假定该字符串只包含小写字母。
 */


/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
};

/**
 * 或者使用 hash map的方式
 */
const firstUniqChar2 = function (s) {
    const myMap = new Map();
    for (let i = 0; i < s.length; i++) {
        if (myMap.has(s[i])) {
            let temp = myMap.get(s[i]) + 1;
            myMap.set(s[i], temp);
        } else {
            myMap.set(s[i], 1);
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (myMap.get(s[i]) === 1) {
            return i;
        }
    }
    return -1;
};