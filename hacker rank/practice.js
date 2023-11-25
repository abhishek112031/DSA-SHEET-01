//creating a vacant 2d matrix:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
];
let rows = matrix.length;
let cols = matrix[0].length;
let outer = new Array(cols);
for (let i = 0; i < cols; i++) {
    outer[i] = new Array(rows); // Create an array for each column
}
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        outer[j][i] = matrix[i][j];
    }
}
console.log(outer)