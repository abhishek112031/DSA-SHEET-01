function diagonalDifference(arr) {
    // Write your code here

    let diag1 = 0;
    let diag2 = 0,i=0;

    for (let i = 0; i < arr.length; i++) {
        diag1 += arr[i][i];
    }
    for (let j = arr.length - 1; j >= 0; j--) {
        diag2+=arr[i][j];
        i++;
        
        
    }

    return Math.abs(diag1 - diag2);

}
let arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
console.log(diagonalDifference(arr))