
function transposematrix(matrix){

    let res=[];
    for(let i=0;i<matrix[0].length;i++){
        let inner=[];

        for(let j=0; j<matrix.length;j++){
            inner.push(matrix[j][i]);
        }
        res.push(inner);
    }
    return res;
}
const matrix=[
    [0, 1, 2, 3], 
    [4, 5, 6, 7],
    [8, 9, 0, 0]
    ];
console.log(transposematrix(matrix));