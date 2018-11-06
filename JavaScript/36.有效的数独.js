/**
 * Created by wxh_pc on 2018/11/6.
 */

/**
 * 判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。
     数字 1-9 在每一行只能出现一次。
     数字 1-9 在每一列只能出现一次。
     数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 */

/**
 * 直接判断是否满足3个条件即可
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
    const rows = new Array(9).fill(0).map(() => new Set());
    const cols = new Array(9).fill(0).map(() => new Set());
    const blocks = new Array(9).fill(0).map(() => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let val = board[i][j];
            if (val === '.') continue;

            let block_no = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (rows[i].has(val) || cols[j].has(val) || blocks[block_no].has(val)) {
                return false;
            }
            rows[i].add(val);
            cols[j].add(val);
            blocks[block_no].add(val);
        }
    }
    return true;
};

