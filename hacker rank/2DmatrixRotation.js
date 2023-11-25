

//practice :
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];



for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
        [arr[i][j],arr[j][i]]=[arr[j][i],arr[i][j]]

    }
}
console.log(arr)

// //for clock wise 
// // for(let inner of arr){
// //     inner.reverse()
// // }

// arr.reverse()//anticlock wise
// console.log(arr)



//for non-square matrix:--->
// function matrixRotation(arr) {

//     //creating transpose:

//     let rows = arr.length;
//     let cols = arr[0].length;
//     let res = new Array(cols);

//     for (let i = 0; i < res.length; i++) {

//         res[i]=new Array(rows);

//     }

//     for(let i=0;i<rows;i++){
//         for(let j=0;j<cols;j++){
//             res[j][i]=arr[i][j];
//         }

//     }

//     // rotation:--->clockwise:

//     for(let i of res){
//         i.reverse()
//     }

//     //anti-clock wise:
//     res.reverse();

//     return res;

// }

