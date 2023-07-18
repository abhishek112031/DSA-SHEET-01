// // Given an array of N integers. Find the first element that occurs at least K number of times 
// N = 7, K = 2
// A[] = {1, 7, 4, 3, 4, 8, 7}
let arr=[1, 7, 4, 3, 4, 8, 7];
let k=2;
let map=new Map();

for(let i=0;i<arr.length;i++){
    
    if(map.has(arr[i])){
        map.set(arr[i],map.get(arr[i])+1);
    }

    else  {
        map.set(arr[i],1)
    }

    if(map.get(arr[i])==k){
        console.log(arr[i]);
        break;
    }
}
console.log(map)

