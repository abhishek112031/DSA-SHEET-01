let n=5;
let p='';
for(let i=1;i<=n;i++){
    for(let j=0;j<n;j++){
        if(i==1 || i==n){
            p+='*'

        }
        else{
            if(j==0 ||  j==n-1){
                p+='*';
            }
            else{
                p+=' '
            }
        }
    }
    p+='\n';

}
console.log(p)