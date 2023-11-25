const arr=[5,3,2,1,7,8,9,0];
for(let i=0;i<arr.length;i++){
    let minPos=i;

    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[minPos]){
            minPos=j;
        }
    }
    [arr[minPos],arr[i]]=[arr[i],arr[minPos]];
}
console.log(arr)