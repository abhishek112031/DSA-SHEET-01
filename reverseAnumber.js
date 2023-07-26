//reverse a number:
function reverseAnum(n){
    let num=n;
   
    let rev=0;

    while(num!=0){
        rev=(rev*10)+(num%10);
        num=Math.floor(num/10);
    }
    return rev;

}
console.log(reverseAnum(123));