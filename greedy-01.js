let arr= [5, 3, 0, 7, 4];
arr.sort();
console.log(arr);//358 and 246

let res1='';
let res2='';
for(let i=0;i<arr.length;i++){
    if(i%2===0){
        res1+=arr[i];
    }
    else{
        res2+=arr[i];
    }

}

console.log((+res1 + +res2),res1,res2)