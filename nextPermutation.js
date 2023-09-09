var nextPermutation = function(arr) {
    let i=arr.length-2;
    while(arr[i]>=arr[i+1]){
        i--;
    }

    if(i>=0){
        let j=arr.length-1;

        while(arr[i]>=arr[j]){
            j--;
        }
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }

    let l=i+1;
    let r=arr.length-1;

    while(l<=r){
        [arr[l],arr[r]]=[arr[r],arr[l]];
        l++;
        r--;
    }
    return arr;


    
};

let arr=[6,2,5,3,1];
console.log(nextPermutation(arr)); //timecomplexity:O(n)