let n=5;
let s='';

for(let i=1;i<=n;i++){
    //space:
    for(let j=n-i;j>0;j--){
        s+=' ';

    }
    //star:
    for(let k=0;k<i;k++){
        s+='*';
    }
    s+='\n';

}
for(let i=1;i<=n-1;i++){
    for(let j=0;j<i;j++){
        s+=' ';
    }
    for(let k=0;k<n-i;k++){
        s+='*'
    }
    s+='\n';


}
console.log(s);