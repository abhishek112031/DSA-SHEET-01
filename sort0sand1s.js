let arr=[0,1,0,1,0,0,1,1,1,0,0];

function sort0s1s(arr){
    let i=0;
    let high=arr.length-1;

    while(i<arr.length){
        if(arr[high]==0 && arr[i]==1){
            [arr[i],arr[high]]=[arr[high],arr[i]];
            i++;
            high--;
        }
        else{
            i++;
        }
    }
    return arr;
}
console.log(sort0s1s(arr))