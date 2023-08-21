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
// }

// //function to find out the first index from where 1 is started;
// function binSearch(arr,row){
    
//     let l=0;
//     let r=arr[row].length-1;
//     let firstIndex=arr[row].length;

//     while(l<=r){
//         let mid=Math.floor((l+r)/2);

//         if(arr[row][mid]===1){
//             firstIndex=mid;
//             r=mid-1;
//         }
//         else{
//             l=mid+1;
//         }
//     }

//    let count=arr[row].length-firstIndex;
//    return count;

// }
// //the time complexity of the above function is O(nlogn)
// console.log(rowWithMax1s(arr))


// console.log("Hello, World!");
// let arr=[[0, 0, 0, 0],
// [0, 0, 0, 0],
// [0, 1, 1, 1],
// [0, 0, 1, 1]];

// function rowWithMax1s(arr){
//   let row=-1;
//   let max1s=0;
  
//   for(let i=0;i<arr.length;i++){
//     let co1ir=binSearch(arr,i);
    
//     if(co1ir>max1s){
//       max1s=co1ir;
//       row=i;
    
//     }
//   }
//   return row;
// }

// function binSearch(arr,rw){
//   let l=0,r=arr[rw].length-1,fIndx=arr[rw].length;
  
//   while(l<=r){
//     let mid=l+Math.floor((r-l)/2);
    
//     if(arr[rw][mid]===1){
//       fIndx=mid;
//       r=mid-1;
//     }
//     else{
//       l=mid+1;
//     }
//   }
//   let count=arr[rw].length-fIndx;
//   return count;
  
  
// }
// console.time()
// console.log(rowWithMax1s(arr));
// console.timeEnd()
