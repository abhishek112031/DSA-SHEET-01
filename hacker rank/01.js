function maximumToys(prices, k) {
    // Write your code here
    
    prices.sort((a,b)=>a-b);;
    // let count=0;
    // let total=0;
    // for(let i of prices){
    //     total=total+1;
    //     if(total<=k){
    //         count=count+1;
    //     }
    //     else{
    //         break;
    //     }
       
    // }
    // return count;
    let sum=0;
    for(let i=0;i<prices.length;i++){
        sum+=prices[i];
        if(sum>k){
            return prices.slice(0,i).length;

        }
        
    }

}

let prices=[1 ,12, 5, 111 ,200 ,1000 ,10],k=50;
console.log(maximumToys(prices,k))