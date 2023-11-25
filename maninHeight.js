function findMaxMinHeight(arr,k){

    if(arr.length===0){
        return 0;
    }
    arr.sort((a,b)=>a-b);
     
    let diff=arr[arr.length-1]-arr[0];
    if(diff===0){
        return 0;
    }
    let max,min;
    for(let i=1;i<arr.length;i++){
        max=Math.max(arr[i-1]+k,arr[arr.length-1]-k);
        min=Math.min(arr[0]+k,arr[i]-k);
        diff=Math.min(diff,max-min);

    }
    return diff;
   

}
