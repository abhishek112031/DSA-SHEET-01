//reverse a number:
// function reverseAnum(n){
//     let num=n;
   
//     let rev=0;

//     while(num!=0){
//         rev=(rev*10)+(num%10);
//         num=Math.floor(num/10);
//     }
//     return rev;

// }
// console.log(reverseAnum(123));


//without using loop:recursion
// function reverseANumber(num){
//     if(num<10){
//         return num;
//     }
//     else{
//         let lastDigit=num%10;
//         let remaining=Math.floor(num/10);
//         return lastDigit.toString()+reverseANumber(remaining)
//     }

// }

// console.log(reverseANumber(12030))
