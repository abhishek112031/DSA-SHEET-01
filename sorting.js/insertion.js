const arr=[5,3,2,1,7,8,9,0];


for(let i=1;i<arr.length;i++){
    for(let j=i-1;j>-1;j--){
        if(arr[j+1]<arr[j]){
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
        }
    }
}
console.log(arr);