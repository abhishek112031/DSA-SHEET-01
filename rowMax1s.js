let arr=[[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 1, 1, 1],
[0, 0, 1, 1]];


function rowWithMax1s(arr){

    let row=-1;
    let maxCount=0;


    for(let i=0;i<arr.length;i++){
        let coir=binSearch(arr,i);

        if(coir>maxCount){
            maxCount=coir;
            row=i;
        }
    }
    return row;
}

function binSearch(arr,row){
    let l=0;
    let r=arr[row].length-1;
    let firstIndex=arr[row].length;

    while(l<=r){
        let mid=Math.floor((l+r)/2);

        if(arr[row][mid]===1){
            firstIndex=mid;
            r=mid-1;
        }
        else{
            l=mid+1;
        }
    }

   let count=arr[row].length-firstIndex;
   return count;

}

console.log(rowWithMax1s(arr))
