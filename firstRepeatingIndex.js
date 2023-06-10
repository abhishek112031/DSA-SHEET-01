// Given an integer array A of size N, find the first repeating element in it.

// We need to find the element that occurs more than once and whose index of first occurrence is smallest.

// If there is no repeating element, return -1.

// let arr = [ 8, 15, 1, 10, 5, 19, 19, 3, 5, 6, 6, 2, 8, 2, 12, 16, 3 ] //op=5


// function repeatingIndex(arr){

//     let map=new Map();

//     let minIndex=Infinity;

//     for(let i=0;i<arr.length;i++){
       
//         if(map.has(arr[i])){

//             if(minIndex>map.get(arr[i])){
//                 minIndex=map.get(arr[i]);
              
//             }
//         }
//         else{
//             map.set(arr[i],i);

//         }

    
//     }
//     if(minIndex!==Infinity){
// 		return arr[minIndex];
// 	}
//     return -1;


// }
// console.log(repeatingIndex(arr));




