//normal method:only possible for positive int and zero;

// function findFactorial(n){
//     if(n==0){
//         return 0;
//     }
//     let res=1;
//     for(let i=1;i<=n;i++){
//         res=res*i;
//     }
//     return res;

// }
// console.log(findFactorial(5))

//method:2
// function findFactorial(n){
//     if(n==0){
//         return 1;
//     }
//     else{
//         return findFactorial(n-1)*n
//     }
    

// }
// console.log(findFactorial(3))