`Input  : arr[] = {100, 200, 300, 400}, k = 2
Output : 700

Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}, k = 4 
Output : 39
We get maximum sum by adding subarray {4, 2, 10, 23} of size 4.

Input  : arr[] = {2, 3}, k = 3
Output : Invalid
There is no subarray of size 3 as size of whole array is 2.`

let arr=[100, 200, 300, 400];

//bruteforce approach:--->

// function slidingWindow(arr,k){

//     //edge case:
//     if(arr.length<k){
//         return 'Invalid'
//     }

//     let maxSUm=-Infinity;

//     for(let i=0;i<arr.length;i++){
//         let subArr=arr.slice(i,i+k);

//         let eachSubArrSum=subArr.reduce((a,b)=>a+b);

//         if(maxSUm<eachSubArrSum){
//             maxSUm=eachSubArrSum
//         }

//     }
//     return maxSUm;

// }
// console.log(slidingWindow(arr,2));




//optimized:o(n)
function slidingWindow(arr,k){

   let sum=arr.slice(0,k).reduce((a,b)=>a+b);
   let max=arr.slice(0,k).reduce((a,b)=>a+b);


   for(let i=k;i<arr.length;i++){
    sum+=arr[i]-arr[i-k];
    if(sum>max){
        max=sum;
    }
   }
   return max;


}
console.log(slidingWindow(arr,2));










