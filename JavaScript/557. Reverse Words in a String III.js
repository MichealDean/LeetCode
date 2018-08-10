/**
 * Created by wxh_pc on 2017/10/12.
 */

/*
 Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 Example 1:
    Input: "Let's take LeetCode contest"
    Output: "s'teL ekat edoCteeL tsetnoc"

 Note: In the string, each word is separated by single space and there will not be any extra space in the string.
 */

/*
    先按照空格拆分出单词，然后依次反转拼接即可
    PS:可以使用js自带的方法，先把单词字符串拆分成单个字符的数组，再反转数组、最后拼成反转后的单词，优点是不用自己实现反转的方法，代码量最少，缺点是效率不是最优！
 */

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    let sArray = s.split(' ');
    let str = '';
    for (let i = 0; i < sArray.length; i++) {
        str += `${sArray[i].split('').reverse().join('')} `;
    }
    return str.slice(0, str.length - 1);
};
