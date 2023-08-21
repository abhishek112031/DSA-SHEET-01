for(let i=1;i<=5;i++){
    let s='';
    for(let j=0;j<i;j++){
        s+='*';
    }
    for(let j=5-i;j>0;j--){
        s+=' ';
    }
    for(let k=0;k<i;k++ ){
        s+='*'
    }
    // s+='\n';
    console.log(s);
}
// console.log(s)