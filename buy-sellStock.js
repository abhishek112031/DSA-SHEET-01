
function buySellstock(arr){

    let profit=-Infinity;
    let innitialVal=arr[0];

    for(let i=1;i<arr.length;i++){
        let curProfit=arr[i]-innitialVal;

        if(innitialVal>arr[i]){
            innitialVal=arr[i];
        }
        if(profit<curProfit){
            profit=curProfit;
        }

        

    }
    return profit;
}
console.log(buySellstock([0,1,2,3,6]));