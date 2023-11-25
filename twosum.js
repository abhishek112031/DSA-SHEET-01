let arr = [10, 5, 3, 4, 3, 5, 6];


// bruteforce approach:
function twoSum(arr,t){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if((arr[i]+arr[j])===t){
                return [i,j];
            }
            else{
                return 'not possible'
            }
        }
    }
}
console.log(twoSum(arr,15));

// optimized:
// function twoSum(arr,t){
//     let map=new Map();
//     for(let i=0;i<arr.length;i++){
//         let val=t-arr[i];

//         if(map.has(val)){
//             return [map.get(val),i];
//         }
//         else{
//             map.set(arr[i],i)
//         }
//     }
// }
// console.log(twoSum(arr,15))