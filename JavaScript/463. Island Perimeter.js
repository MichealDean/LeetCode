/**
 * Created by wxh_pc on 2017/10/16.
 */

/*

  You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
  Example:
      [[0,1,0,0],
      [1,1,1,0],
      [0,1,0,0],
      [1,1,0,0]]

  Answer: 16
  Explanation: The perimeter is the 16 yellow stripes in the image below:(图片无法显示)
  */

/*
    理清思路最重要~这道题做的不错~
  */
/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function(grid) {
    let nums = 0;
    if (!grid || grid.length === 0) return 0;
    for (let m = 0; m < grid.length; m++) {
        for (let n = 0; n < grid[m].length; n++) {
            if (grid[m][n] === 1) {
                let left = n - 1 < 0 ? 0 : grid[m][n - 1];
                let right = n + 1 >= grid[m].length ? 0 : grid[m][n + 1];
                let top = m - 1 < 0 ? 0 : grid[m - 1][n];
                let down = m + 1 >= grid.length ? 0 : grid[m + 1][n];
                let numOfAdj = right + left + top + down;
                nums += 4 - numOfAdj;
            }

        }
    }
    return nums;
};