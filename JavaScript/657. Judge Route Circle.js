/**
 * Created by wxh_pc on 2017/10/11.
 */

/*
 Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.
 The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down).
 The output should be true or false representing whether the robot makes a circle.

 Example 1:
    Input: "UD"
    Output: true
 Example 2:
    Input: "LL"
    Output: false
 */

/*
    Easy难度，只需要判断字符串中U与D、L与R的数量相同就行了
 */

/**
 * @param {string} moves
 * @return {boolean}
 */
let judgeCircle = function(moves) {
    let A = 0, a =0, B = 0, b = 0;
    for (let i = 0; i<moves.length; i++) {
        switch (moves.charAt(i)) {
            case 'U':
                A++;
                break
            case 'D':
                a++;
                break
            case 'L':
                B++;
                break
            case 'R':
                b++;
                break
        }
    }
    return (A === a && B === b);
};

