// Given an array having both positive and negative integers. The task is to compute the length of the largest subarray with sum 0.

// Input:
// N = 8
// A[] = {15,-2,2,-8,1,7,10,23}
// Output: 5
// Explanation: The largest subarray with
// sum 0 will be -2 2 -8 1 7.
//brute force:
// let arr=[15,-2,2,-8,1,7,10,23];

// let subArr=[];

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<=arr.length;j++){
//         if((arr.slice(i,j).reduce((a,b)=>a+b)  )===0){

//             subArr.push(arr.slice(i,j).length)
//         }
//     }
// }
// if(subArr.length){

//     console.log(Math.max(...subArr))
// }
// else{
//     console.log('0')
// }




// optimized:O(n)
// Javascript program to find maximum length subarray with 0 sum

    // Returns length of the maximum length subarray with 0 sum
    function maxLen(arr)
    {
        // Creates an empty hashMap hM
        let hM = new Map();
 
        let sum = 0; // Initialize sum of elements
        let max_len = 0; // Initialize result
 
        // Traverse through the given array
        for (let i = 0; i < arr.length; i++) {
            
            // Add current element to sum
            sum += arr[i];
 
            if (arr[i] == 0 && max_len == 0)
                max_len = 1;
 
            if (sum == 0)
                max_len = i + 1;
 
            // Look this sum in hash table
            let prev_i = hM.get(sum);
 
            // If this sum is seen before, then update max_len
            // if required
            if (prev_i != null)
                max_len = Math.max(max_len, i - prev_i);
                
            else // Else put this sum in hash table
                hM.set(sum, i);
        }
 
        return max_len;
    }

      


