
function subArrWith0sum(arr){
    let resSubArrSet=[];
    for(let i=0;i<arr.length;i++){
        let prefix=0;//position matters
        for(let j=i;j<arr.length;j++){
            prefix+=arr[j];
            if(prefix===0){
                resSubArrSet.push([i,j]);
                // prefix=0;
            }
        }
    }
    return resSubArrSet;
}
let arr = [6, 3, -1, -3, 4, -2, 2, 4, 6, -12, -7];
console.log(subArrWith0sum(arr))