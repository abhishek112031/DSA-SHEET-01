//kadanes algo is used to find max sum subarray:-->

function maxSum(arr){
    let maxSum=arr[0];
    let sum=0;

    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
        maxSum=Math.max(sum,maxSum);

        if(sum<0){
            sum=0;
        }
    }
    return maxSum;

}

console.log(maxSum([1,2,-4,5,6,-8]));