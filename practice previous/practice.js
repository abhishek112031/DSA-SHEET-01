//dutch national flag algo:

// const dutchNationalFlagAlgorithm=(arr)=>{
//     let i=0;
//     let h=arr.length-1;
//     let l=0;

//     while(i<=h){
//         if(arr[i]===0){
//             [arr[i],arr[l]]=[arr[l],arr[i]];
//             l++;
//             i++;
//         }
//         else if(arr[i]===2){
//             [arr[i],arr[h]]=[arr[h],arr[i]];
//             h--;
//         }
//         else{
//             i++
//         }
//     }
//     return arr;

// }
// console.log(dutchNationalFlagAlgorithm([1,0,1,0,2,0,1,2,0,0,0,1,1]))


//kadanes Algorithm:--->to find out maximum sum subarray
//kadanes algorithm: 2

// function kadanesAlgorithm(arr){
//     let curSum=0;
//     let maxSum=arr[0];

//     for(let i=0;i<arr.length;i++){
//         curSum+=arr[i];
//         maxSum=Math.max(maxSum,curSum);

//         if(curSum<0){
//             curSum=0;
//         }
//     }
//     return maxSum;
// }
// console.log(kadanesAlgorithm([1,-2,3,4,-5,10]))


//row with max1s:
// let arr=[[0, 0, 0, 0],
// [0, 0, 0, 0],
// [0, 1, 1, 1],
// [0, 0, 1, 1]];


// function rowWithMax1s(arr){
//     let row=-1;
//     let maxCount=0;

//     for(let i=0;i<arr.length;i++){
//         let coir=binSearch(arr,i);
//         if(coir>maxCount){
//             maxCount=coir;
//             row=i;
//         }
//     }

//     return row;

//     function binSearch(arr,rw){
//         let l=0;
//         let r=arr[rw].length-1;

//         let fIndx=arr[rw].length;

//         while(l<=r){
//             let mid=Math.floor((l+r)/2);

//             if(arr[rw][mid]===1){
//                 fIndx=mid;
//                 r=mid-1;
//             }
//             else{
//                 l=mid+1
//             }
//         }

//         let count=arr[rw].length-fIndx;
//         return count
//     }
// }

// console.log(rowWithMax1s(arr))


//next permutation:---->
// const arr=[6,2,5,3,1];

// function nextPermutation(arr){
//     let i=arr.length-2;
//     while(arr[i]>=arr[i+1]){
//         i--;
//     }

//     if(i>0){
//         let j=arr.length-1;
//         while(arr[i]>=arr[j]){
//             j--;
//         }

//         [arr[i],arr[j]]=[arr[j],arr[i]]
//     }

//     let l=i+1;
//     let r=arr.length-1;

//     while(l<=r){
//         [arr[l],arr[r]]=[arr[r],arr[l]];
//         l++;
//         r--;
//     }
//     return arr;
// }
// console.log(nextPermutation(arr))



//object Manipulation:
// const obj={
//     first_user_name:'abhishek',
//     last_user_name:'adhikary',
//     date_of_birth:'15-08-1991',
//     user_email_id:'abhishek.112031@gmail.com'
// }
// function modifyKeyOfObj(obj){

//     let res={};

//     for(let [key,val] of Object.entries(obj)){
//         let arr=key.split('_');

//         for(let i=1;i<arr.length;i++){
//             arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
//         }
//         let refinedKey=arr.join('');

//         res[refinedKey]=val;
//     }
//     return res;

// }
// console.log(modifyKeyOfObj(obj))


//how to check null value or not ?
// const a=2;
// console.log(a===null)

// var string = "Welcome to this Javascript Guide!";

// // Output becomes !ediuG tpircsavaJ siht ot emocleW

// const strArr=string.split(' ').reverse();



// for(let i=0;i<strArr.length;i++){
//     if(strArr[i]!==""){
//         strArr[i]=strArr[i].split('').reverse().join('')
//     }
// }
// console.log(strArr.join(' '))


//callback function:
// const arr=[1,2,3];
// function mainFunc(element,callback){
//     arr.push(element);
//     callback(arr);
// }
// function cb(cbarg){
//     console.log('modified array=>', arr)

// }

// mainFunc(100,cb);


//string problems:

//reverse a string:

// let str='my name is abhishek adhikary, i am a software developer!';
// let res=str.split('').reverse().join('');
// console.log(res);


//factorial of a number:--->

// function factorial(n){
//     let innitial=1;
//     if(n==0){
//         return 1;
//     }
//     for(let i=1;i<=n;i++){
//         innitial=innitial*i;
//     }
//     return innitial;
// }
// console.log(factorial(1))


// prime or nt:
// function isPrime(n){
//     if (n===0 || n===1){
//         return false;
//     }
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i===0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(6))


//largest in nested array:

// let arr=[[1,2,3],
// [4,5,6],
// [7,8,-90]];

// function largetInNestedArr(arr){
//     // let largest=-Infinity;

//     // for(let i=0;i<arr.length;i++){
//     //     for(let j=0;j<arr[i].length;j++){
//     //         if(arr[i][j]>largest){
//     //             largest=arr[i][j];

//     //         }
//     //     }
//     // }

//     // return largest;

//     //2nd method:--->
//     return Math.max(...arr.flat());
// }
// console.log(largetInNestedArr(arr))


//fibonacci sequence:

// function fibonacciAt(n){
//     if(n==0){
//         return 0;
//     }
//     else if (n===1){
//         return 1;
//     }
//     else{
//         return fibonacciAt(n-1)+fibonacciAt(n-2);
//     }
// }
// let fibSeries=" ";
// for(let i=0;i<22;i++){
//     fibSeries+=fibonacciAt(i)+' '
// }
// console.log(fibSeries);


//capitalizeFirstLetter:--->
// let str='hi, my name is abhishek adhikary and i am a web developer!';

// let strArr=str.split(' ');
// for(let i=0;i<strArr.length;i++){
//     strArr[i]=strArr[i].charAt(0).toUpperCase()+strArr[i].slice(1);
// }
// console.log(strArr.join(' '));

//find the occurence of each char in a string:

// function countChr(s){
//     let obj={};

//     for(let i of s){
//         obj[i]=obj[i]?obj[i]+1:1;
//     }

//     return obj;
// }
// console.log(countChr('abhishek adhikary'))


//remove duplicate:
// let arr=[1,1,2,2,8,8,8,3,0,5];
//method:1
// let res=arr.filter((elem,idx)=>{
//     return arr.indexOf(elem)===idx;
// })
// console.log(res);

//method:2
// let res=[];
// for(let i of arr){
//     if(!res.includes(i)){
//         res.push(i);
//     }
// }
// console.log(res)

//method:3
// let map=new Map();
// for(let i of arr){
//     map.set(i,map.has(i)?map.get(i)+1:1)
// }
// console.log(map);
// for(let i of map.keys()){
//     console.log(i)
// }
//method:4
// let set =new Set(arr);
// // console.log(Array.from(set),[...set])
// set.add(7);
// console.log(set.size)

//promises:--->
// function func1() {
//     return new Promise((resolve, reject) => {
//         let err = false;
//         if (!err) {
//             setTimeout(() => {
//                 resolve('this is func1 resolved!!!')
//             }, 4000)


//         }
//         else {
//             reject('func1 rejected!!')
//         }
//     })
// }
// function func2() {
//     return new Promise((resolve, reject) => {
//         let err = false;
//         if (!err) {
//             setTimeout(() => {
//                 resolve('this is func2 resolved!!!')
//             }, 2000)


//         }
//         else {
//             reject('func2 rejected!!')
//         }
//     })
// }
// function func3() {
//     return new Promise((resolve, reject) => {
//         let err = false;
//         if (!err) {
//             setTimeout(() => {
//                 resolve('this is func3 resolved!!!')
//             }, 1000)


//         }
//         else {
//             reject('func3 rejected!!')
//         }
//     })
// }



//normal execution:

// func1().then(res1 => {
//     console.log(res1);
//     func2()
//         .then(res2 => {
//             console.log(res2);
//             func3()
//                 .then(res3 => {
//                     console.log(res3)
//                 }).catch(err3 => console.log(err3))
//         }).catch(err2 => console.log(err2))

// })
// .catch(err1 => {
//         console.log(err1)
// })


//promise.all:
// Promise.all([func1(),func2(),func3()])
// .then(res=>{
//     console.log(Array.isArray(res))
// })


// async function async1(){
    
//         let f1resp=await func1();
//         // console.log(f1resp)
//         let f2resp=await func2();
//         // console.log(f2resp)
//         let f3resp=await func3();
//         // console.log(f3resp)
//         return [f1resp,f2resp,f3resp]


    
// }
// async1()
// .then(res=>{
//     console.log(res)
// })
// .catch(err=>{
//     console.log(err)
// })



// random no generation:--->

// const random=Math.floor(Math.random()*2);
// console.log(random)

// function generateRandom(length){


//     let charString='ABCDEFGHIJKLMNOPQRSTUVWXY!@#$%^&*Z1234567890abcdcfghijklmnopqrstuvwxyz';

//     let resStr='';

//     for(let i=0;i<length;i++){
//         let genereteCharIndex=Math.floor(Math.random()*charString.length);
//         resStr+=charString[genereteCharIndex];
//     }
//     return resStr;
// }
// console.log(generateRandom(20))


// function generateRand(max,min){
//     let random=Math.floor(Math.random()*(max-min+1))+min;
//     return random;
// }
// console.log(generateRand(10,20))

//memoization:

function factorialOf(n){
    if(n<0) return 'cant be calculated!'
    if(n===0){
        return 1;
    }
    else{
        return n*factorialOf(n-1);
    }
}
console.time()
console.log(factorialOf(5))
console.timeEnd()

console.time()
console.log(factorialOf(5))
console.timeEnd()



// function memoization(){
//     let cache={}

//     return function(param){
//         if(param in cache){
//             return cache[param];
//         }
//         else{
//             let result=factorialOf(param);
//             cache[param]=result;
//             return result;
//         }
//     }
// }

// console.time();
// let memoize=memoization();
// console.log(memoize(5));
// console.timeEnd();

// console.time();
// let memoize2=memoization();
// console.log(memoize2(5));
// console.timeEnd();
