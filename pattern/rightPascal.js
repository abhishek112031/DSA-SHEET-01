`*
**
***
****
*****
****
***
**
*`


let n=5;
let pattern='';


for(let i=1;i<=n;i++){
    for(let j=0;j<i;j++){
        pattern+='*';
    }
    pattern+='\n';

}
for(let i=n-1;i>0;i--){
    for(let j=0;j<i;j++){
        pattern+='*'
    }
    pattern+='\n';

}
console.log(pattern)
