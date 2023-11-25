//array sorting algorithms:--->
//bubble sort:

const arr=[5,3,2,1,7,8,9,0];
function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                //swap method:1
                let temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }

        }
    }
    return arr;
}
console.log(bubbleSort(arr));