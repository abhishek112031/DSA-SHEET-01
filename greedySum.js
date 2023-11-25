//Given an array of digits (values are from 0 to 9), find the minimum possible sum of two numbers formed from digits of the array. All digits of given array must be used to form the two numbers.

// Input: [6, 8, 4, 5, 2, 3]
// Output: 604
// The minimum sum is formed by numbers 
// 358 and 246

// Input: [5, 3, 0, 7, 4]
// Output: 82
// The minimum sum is formed by numbers 
// 35 and 047


let arr=[5, 3, 0, 7, 4];
function greedySum(arr){

    let sortedgivenArr=[...arr].sort((a,b)=>b-a);
    let num1='';
    let num2='';

    while(sortedgivenArr.length!=0){
        num1+=sortedgivenArr.pop();
        if(sortedgivenArr.length!=0){
            num2+=sortedgivenArr.pop();
        }

    }

    return parseInt(num1)+parseInt(num2);
}
console.log(greedySum(arr))