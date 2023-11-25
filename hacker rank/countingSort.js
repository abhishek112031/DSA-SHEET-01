let arr=[1,1,3,2,1];

function countingSort(arr){
    let max=Math.max(...arr),min=Math.min(...arr);
    let resArr=new Array(max+1).fill(0);

    for(let i=0;i<arr.length;i++){
        resArr[arr[i]]++;
    
    }
    return resArr
}
console.log(countingSort(arr))