/**
 * Created by wxh_pc on 2017/10/17.
 */

/*
 You are playing the following Nim Game with your friend: There is a heap of stones on the table,
 each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones.
 Both of you are very clever and have optimal strategies for the game. Write a function to determine whether you can win the game given the number of stones in the heap.
 For example, if there are 4 stones in the heap, then you will never win the game: no matter 1, 2, or 3 stones you remove, the last stone will always be removed by your friend.

 Credits:
    Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
 */

/*
    这道题更像一到逻辑思维题~(好吧，我最开始没有想清楚)，如果双方策略都足够优秀，凡是4的倍数的石头，我都赢不了
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const canWinNim = function(n) {
    return n % 4 !== 0;
};