//Stickler the thief wants to loot money from a society having n houses in a single line. He is a weird person and follows a certain rule when looting the houses. According to the rule, he will never loot two consecutive houses. At the same time, he wants to maximize the amount he loots. The thief knows which house has what amount of money but is unable to come up with an optimal looting strategy. He asks for your help to find the maximum money he can get if he strictly follows the rule. ith house has a[i] amount of money present in it.

// function maxWealth(arr){
//     if(arr.length==0){
//         return 0
//     }
//     if(arr.length===1){
//         return arr[0];
//     }

//     let dp=new Array(arr.length);
//     dp[0]=arr[0];
//     dp[1]=Math.max(arr[0],arr[1]);

//     for(let i=2;i<arr.length;i++){
//         dp[i]=Math.max(dp[i-1],dp[i-2]+arr[i])
//     }
//     return dp[arr.length-1];
// }
// const arr=[12,3,12,25];
// console.log(maxWealth(arr))




//for circularly aligned houses:
// function maxLootCircular(houses) {
//     const n = houses.length;
  
//     if (n === 0) {
//       return 0;
//     }
  
//     if (n === 1) {
//       return houses[0];
//     }
  
//     // Function to calculate the maximum loot for a given range of houses
//     function maxLootInRange(start, end) {
//       let prevMax = 0;
//       let currentMax = 0;
  
//       for (let i = start; i <= end; i++) {
//         const temp = currentMax;
//         currentMax = Math.max(prevMax + houses[i], currentMax);
//         prevMax = temp;
//       }
  
//       return currentMax;
//     }
  
//     // Calculate the maximum loot for two cases:
//     // 1. When the thief loots the first house but not the last.
//     // 2. When the thief doesn't loot the first house but can loot the last.
//     const case1 = maxLootInRange(0, n - 2);//second last index
//     const case2 = maxLootInRange(1, n - 1);//last index
  
//     // Return the maximum of the two cases
//     return Math.max(case1, case2);
//   }
  
//   // Example usage:
//   const houses = [2, 7, 9, 3, 1];
//   const maxMoney = maxLootCircular(houses);
//   console.log("Maximum money the thief can loot (circular): " + maxMoney);
  

