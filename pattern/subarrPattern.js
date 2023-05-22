

let arr=[1,2,3,4,5];
let s='';

for(let i=0;i<5;i++){
    for(let j=i;j<5;j++){
        for(let k=i;k<j+1;k++){
            s+=arr[k];
        }
        s+='\n';

    }
}
console.log(s);