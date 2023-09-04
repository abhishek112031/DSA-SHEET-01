//dutch national flag algo:

// const dutchNationalFlagAlgorithm=(arr)=>{
//     let i=0;
//     let h=arr.length-1;
//     let l=0;

//     while(i<=h){
//         if(arr[i]===0){
//             [arr[i],arr[l]]=[arr[l],arr[i]];
//             l++;
//             i++;
//         }
//         else if(arr[i]===2){
//             [arr[i],arr[h]]=[arr[h],arr[i]];
//             h--;
//         }
//         else{
//             i++
//         }
//     }
//     return arr;

// }
// console.log(dutchNationalFlagAlgorithm([1,0,1,0,2,0,1,2,0,0,0,1,1]))


//kadanes Algorithm:--->to find out maximum sum subarray
//kadanes algorithm: 2

// function kadanesAlgorithm(arr){
//     let curSum=0;
//     let maxSum=arr[0];

//     for(let i=0;i<arr.length;i++){
//         curSum+=arr[i];
//         maxSum=Math.max(maxSum,curSum);

//         if(curSum<0){
//             curSum=0;
//         }
//     }
//     return maxSum;
// }
// console.log(kadanesAlgorithm([1,-2,3,4,-5,10]))


//row with max1s:
// let arr=[[0, 0, 0, 0],
// [0, 0, 0, 0],
// [0, 1, 1, 1],
// [0, 0, 1, 1]];


// function rowWithMax1s(arr){
//     let row=-1;
//     let maxCount=0;

//     for(let i=0;i<arr.length;i++){
//         let coir=binSearch(arr,i);
//         if(coir>maxCount){
//             maxCount=coir;
//             row=i;
//         }
//     }

//     return row;

//     function binSearch(arr,rw){
//         let l=0;
//         let r=arr[rw].length-1;

//         let fIndx=arr[rw].length;

//         while(l<=r){
//             let mid=Math.floor((l+r)/2);

//             if(arr[rw][mid]===1){
//                 fIndx=mid;
//                 r=mid-1;
//             }
//             else{
//                 l=mid+1
//             }
//         }

//         let count=arr[rw].length-fIndx;
//         return count
//     }
// }

// console.log(rowWithMax1s(arr))






