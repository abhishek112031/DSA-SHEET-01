//find list of prime numbers upto n by sieve of eratosthenes algorithm:--->


function sieveAlgo(n){

    let arr=[];

    for(let i=0;i<=n;i++){
        arr.push(i)
    }

    arr[0]=-1;
    arr[1]=-1;

    let p=2;
    while(p<=Math.sqrt(n)){
        if(p!=-1){
            for(let j=p*2;j<=n;j+=p){
                arr[j]=-1;
            }
        }
        p++
    }


    for(let i=0;i<arr.length;i++){
        if(arr[i]!==-1){
            console.log(arr[i])
        }
    }
}

sieveAlgo(102);

