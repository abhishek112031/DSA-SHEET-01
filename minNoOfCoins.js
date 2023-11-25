//Given a value of V Rs and an infinite supply of each of the denominations {1, 2, 5, 10, 20, 50, 100, 500, 1000} valued coins/notes, The task is to find the minimum number of coins and/or notes needed to make the change?


function minCoins(val,coins){

 
    console.log(coins)
    let res=[];

    for(let i=coins.length-1;i>=0;i--){

        while(val>=coins[i]){
            val-=coins[i];
            res.push(coins[i])
        }

    }
    return res

}
console.log(minCoins(1173,[1, 2, 5, 10, 20, 50, 100, 500, 1000]))