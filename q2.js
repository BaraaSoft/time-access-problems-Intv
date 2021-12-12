/*

Q2)

Given a boolean 2D matrix, find the number of islands.
A group of connected (horizontally, vertically or diagonally) +s forms an island. For example,

*/





const parseGrid = (str) => {
    let grid = str.trim().split('\n')
        .map(row => row.split(''))
    return grid;
}

const isValid = (row, col, arr) => {
    let conditionA = row >= 0 && row < arr.length;
    let conditionB = col >= 0 && col < arr[0].length;
    return conditionA && conditionB;
}

const traverse = (row, col, grid) => {
    if (!isValid(row, col, grid)) return 0;
    let cell = grid[row][col]
    if (cell == '0') return 0;
    if (cell == '+') {
        grid[row][col] = '0'
        // vertical traversal
        traverse(row + 1, col, grid)
        traverse(row - 1, col, grid)
        traverse(row, col + 1, grid)
        traverse(row, col - 1, grid)
        // diagonal traversal
        traverse(row + 1, col + 1, grid)
        traverse(row - 1, col - 1, grid)
        traverse(row + 1, col - 1, grid)
        traverse(row - 1, col + 1, grid)
    }

    return 1;

}


const numOfIsland = (gridStr) => {
    let grid = parseGrid(gridStr);
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (traverse(i, j, grid))
                count++;
        }
    }
    return count
}





let str1 = `
0+0
+0+
0++
`;
let str2 = `
000++0
+++00+
000000
+0000+
++00+0
`;
let str3 = `
0000000000++++00+00++00++0+0+000+0+
00++0000+++000000+00++0+0+0++++0+++
00++++0+0+000+0+++0+++000++00+0+++0
000+0000+0++0+++++++000++0+0+++++00
0++++0+++00+00+0000+0++0000000++000
0+0+++0++++000++++++++0000++00+0++0
++0+00000+++0++0++000++++++000++0++
0++0000+00+++0+++000+++0+0+0000+++0
0++++000++00++0+000+0000++00+000000
+0++0+++0+++++0+++00+0+0+0++0++0+0+
000000+0000++0000+++++++00++0+0+0++
0+0+++++000++++0++++00+0++00++0++++
++0++++0+0+000+000++00+0+000+0++0+0
00+0+++++++0+0+000++000+++++00+0000
+0+0+0+++0++000000+++++0+00+++0+++0
+++0+0+++00++0++++++0+++00000000++0
0+0++++0000+0+0++0+++00000000++0000
00000+++0++0000+0000++0+0+0+++00++0
0+0++0+0++++++00000++++0+000+0+00+0
0+0000+0+0+++0++000++00+00+00+00+0+
0+++++000+++0+++00++00++++++++++000
000+0000++0+++000+0+00+0+000+++++00
++0+0+0++0++++0+0+00+00+00++0+000+0
0++000+0+00++00+++00++0+0000+++00++
000+0++0+++0000+000+00++0+00+000+++
+000++0+0+0+++00++++++0+0+0+++0++00
0+0++00++0000+00++000000++0+00++000
+0+++0+++0++00+000+++00++00+0+0+0++
0000++++++++++0++00++0+0+000++0++++
+000000+0+0++0++0000++00000000++0+0
`


console.log(">> Test1 - Num of Island is: ", numOfIsland(str1))
console.log(">> Test2 - Num of Island is: ", numOfIsland(str2))
console.log(">> Test3 - Num of Island is: ", numOfIsland(str3))