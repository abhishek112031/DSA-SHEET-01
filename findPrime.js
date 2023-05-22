
function isPrime(n){
    let flag=true;

    if(n==0 || n==1){
        flag=false;
        return flag;
    }
    for(let i=2; i*i<=n;i++){
        if(n%i===0){
           flag=false;
           break;
        }
    }
    return flag;
   
}



let primes='';

for(let i=0;i<100;i++){
    if(isPrime(i)){
        primes+=i+","

    }
}
console.log(primes)