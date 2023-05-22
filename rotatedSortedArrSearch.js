let arr=[4,5,6,7,1,2,3];


function rotatedArrSearching(arr,target){
    let l=0;
    let r=arr.length-1;

    while(l<=r){
        let mid=Math.floor((l+r)/2);

        if(arr[mid]===target){
            return mid;
        }
        else if(arr[l]<=arr[mid]){
            if(target>=arr[l]  && target<=arr[mid]){
                r=mid-1;
            }
            else{
                l=mid+1;
            }
        }
        else{
            if(target>=arr[mid]  && target<=arr[r]){
                l=mid+1;


            }
            else{
                r=mid-1;


            }

        }
    }
    return 'not found!'
}

console.log(rotatedArrSearching(arr,4))