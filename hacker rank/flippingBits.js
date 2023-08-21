let n=4;

let res='';
for(let i=0;i<32;i++){
    res=((n>>i)&1)+res;
}
// console.log(res.replace(/1/,'0'))
let val='';
for(let i=0;i<res.length;i++){
    if(res[i]=='0'){
        val+='1'
    }
    else{
        val+='0'
    }
}
console.log(parseInt(val,2))

