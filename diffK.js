// Given an array A of integers and another non negative integer B .
// Find if there exists 2 indices i and j such that A[i] - A[j] = B and i != j.

// A = [1, 5, 3] return 0/1
// B = 2

function diff(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if((arr[i]-arr[j])==2){
                return 1
            }
        }
    }
    return 0;
}

console.log(diff([2,4,3]))