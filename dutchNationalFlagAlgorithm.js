var sortColors = function(arr) {
    //using DNF-Algorithm:
    let i=0;
    let l=0;
    let r=arr.length-1;

    while(i<=r){
        if(arr[i]==0){
            [arr[i],arr[l]]=[arr[l],arr[i]];
            i++;
            l++;

        }
        else if(arr[i]===2){
            [arr[i],arr[r]]=[arr[r],arr[i]];
            r--;

        }
        else{
            i++;

        }
    }
    return arr;
    
};
let arr= [2,0,2,1,1,0];
console.log(sortColors(arr))