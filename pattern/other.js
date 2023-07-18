let n=5;
let s="";
for(let i=n;i>0;i--){
    for(let j=0;j<i;j++){
        s+='*';

    }
    s+='\n';

}
for(let i=1;i<=n;i++){
    for(let j=0;j<i;j++){
        s+='*';

    }
    s+='\n';

}
console.log(s)
