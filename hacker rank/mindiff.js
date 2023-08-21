let arr=[
    -20 ,-3916237, -357920 ,-3620601 ,7374819 ,-7330761, 30, 6246457 ,-6461594 ,266854];

arr.sort((a,b)=>a-b);
let minDiff=Infinity;
for(let i=0;i<arr.length;i++){
    if((arr[i+1]-arr[i])<minDiff){
        minDiff=arr[i+1]-arr[i]
    }

}

let res=[];

for(let i=0;i<arr.length;i++){
    if((arr[i+1]-arr[i])==minDiff){
        res.push(arr[i]);
        res.push(arr[i+1]);
    }
}
console.log(res);
