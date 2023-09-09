// function maximumToys(prices, k) {
//     // Write your code here
    
//     prices.sort((a,b)=>a-b);;
//     // let count=0;
//     // let total=0;
//     // for(let i of prices){
//     //     total=total+1;
//     //     if(total<=k){
//     //         count=count+1;
//     //     }
//     //     else{
//     //         break;
//     //     }
       
//     // }
//     // return count;
//     let sum=0;
//     for(let i=0;i<prices.length;i++){
//         sum+=prices[i];
//         if(sum>k){
//             return prices.slice(0,i).length;

//         }
        
//     }

// }

// let prices=[1 ,12, 5, 111 ,200 ,1000 ,10],k=50;
// console.log(maximumToys(prices,k))



//hourglass practice:--->
let arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

function hourglassMaxSum(arr){
    let maxSum=-63;

    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            let curSum=arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];

            if(curSum>maxSum){
                maxSum=curSum;
            }

        }

    }
    return maxSum;
}

console.log(hourglassMaxSum(arr));