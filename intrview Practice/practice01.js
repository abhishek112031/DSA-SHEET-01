//destructuring in javaScript:
// const arr=[1,2,3,4,5,6];

// const [,,,...c]=arr;
// console.log(c)

// function func1 (...rest){
//    console.log(arguments[0],rest)
// }
// func1(1,2,3,4,5)



// const func1=(...rest)=> {
//     console.log(arguments[0], rest)
// }
// func1(1, 2, 3, 4, 5)



//working with this:
// const person = {
//     name: "Alice",
//     sayName: () => {
//         console.log(this.name);
//     },
// };

// person.sayName(); 


// const people = [
//     {
//         name: "John",
//         age: 30,
//         city: "New York",
//     },
//     {
//         name: "Alice",
//         age: 25,
//         city: "Los Angeles",
//     },
//     {
//         name: "Bob",
//         age: 35,
//         city: "Chicago",
//     },
//     {
//         name: "Ella",
//         age: 28,
//         city: "San Francisco",
//     },
// ];


// const output=people.map(elem=>{

//     if(elem.age===30){
//         return {...elem,age:45}
//     }
//     else{
//         return elem;
//     }

// });
// console.log(output)


// function calculateFactorial(num){
//     if(isNaN(num)){
//         return 'not a number'
//     }
//     if(num===1||num===0){
//         return 1;
//     }else{
//         return num*calculateFactorial(num-1)
//     }
// }
// console.log(calculateFactorial(5))

// reverse a number:
// function reverseNum(num){
//     let temp=num;

//     let res=0;

//     while(temp>0){
//         res=(res*10)+temp%10;
//         temp=Math.floor(temp/10)
//     }
//     return res;

// }
// console.log(reverseNum(10123))


//using recursion:
// function reverseNumber(num) {
//     if (num < 10) {
//       return num;
//     } else {
//       let lastDigit = num % 10;
//       let remainingDigits = Math.floor(num / 10);
//      return lastDigit.toString() +  reverseNumber(remainingDigits);
  
//     }
//   }
  
//   // Example usage:
//   const num = 2001;
//   const reversedNum = reverseNumber(num);
//   console.log("Original number:", num);
//   console.log("Reversed number:", reversedNum);


//sum of digits:
// function sumOfdigits(num){
//     if(num<10){
//       return num;
//     }
//     else{
      
//       let remainder=num%10;
//       num=Math.floor(num/10)
//       return remainder+sumOfdigits(num);
//     }
//   }
//   console.log(sumOfdigits(1234));
  

// function sumOfdigits(num){
//     let res=0;
//     while(num>0){
//         res=res+num%10;
//         num=Math.floor(num/10);
//     }
//     return res

// }
// console.log(sumOfdigits(1234));


//reverse a string:
// function revString(s){
//     if(s.length===1){
//         return s;
//     }
//     else{
//         return revString(s.slice(1))+s[0];
//     }
// }
// console.log(revString('abhi  sh e k'))


//replace string:--->
let str='hi my name is abhishek,   I am a developer!';

let str2=str.split(' ');
// for(let i=0;i<str2.length;i++){
//     str2[i]=str2[i].charAt(0).toUpperCase()+str2[i].slice(1);
// };
// console.log(str2.join(' '))

// let replaced=str.replace(/abhishek/gi,'tamim');
// console.log(replaced)

//reverse words:--->
// console.log(str2)

// let res=[];

// for(let i=str2.length-1;i>=0;i--){

//     if(str2[i]!==''){
//         res.push(str2[i]);

//     }
// }
// console.log(res.join(' '));

// const key = 'dynamicKey';
// const obj = {
//   [key]: 'Dynamic Property'
// };
// console.log(obj)


// function sumOfdigits(num){
//     // let res=0;

//     // while(num>0){
//     //     res+=num%10;
//     //     num=Math.floor(num/10)
//     // }
//     // return res;

//     //without loop:--->
//     if(num<10){
//         return num;
//     }
//     else{
//         return (num%10)+sumOfdigits(Math.floor(num/10))
//     }
// }
// console.log(sumOfdigits(12345))


//reverse :

// function reverseAnum(num){
//     //normal method:-->
//     // let res=0;
//     // while(num>0){
//     //     res=res*10+num%10;
//     //     num=Math.floor(num/10);
//     // }
//     // return res

//     if(num<10){
//         return num;
//     }else{
//         const lastDigit=num%10

//         return lastDigit.toString()+reverseAnum(Math.floor(num/10))
//     }
// }
// console.log(reverseAnum(10023))


//reverse a string:

// function reverseAstring(str){
//     if(str.length===1 || str==""){
//         return str;
//     }
//     else{
//       return  reverseAstring(str.slice(1))+str[0]
//     }
// }
// console.log( reverseAstring('abcde'));




//abcde