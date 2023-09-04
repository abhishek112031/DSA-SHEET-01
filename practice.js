//single swap same /not;

// function swapping(s1,s2){

//     if(s1.length!==s2.length){
//         return false
//     }
//     else if(s1===s2){
//         return false;
//     }
//     else{
//         if(s1.split('').sort().join('')===s2.split('').sort().join('')){

//             let count=0;

//             for(let i=0;i<s1.length;i++){
//                 if(s1[i]!=s2[i]){
//                     count=count+1;
//                 }
//                 if(count>2){
//                     return false
//                 }

//             }
//             return true;
//         }
//         else{
//             return false;
//         }


//     }
// }
// let s1='abhishek';
// let s2='abihshek'
// console.log(swapping(s1,s2));


//replace string:

// let s="A man, a plan, a canal: Panama";

// let s2=s.replace(/[^a-z0-9]/gi,'');
// console.log(s2.toLowerCase().split('').reverse().join());


//convert key:snake case to camel case in an object:

// let obj={
//     first_name:'Abhishek adhikary',
//     user_email_id:'abhisheek.112031@gmail.com',
//     phone_number:7601854066

// }


// let ansObj={};

// for(let [key,value] of Object.entries(obj)){
//     let arr=key.split('_');

//     for(let i=1;i<arr.length;i++){
//         arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
//     }
//     ansObj[arr.join('')]=value;
// }
// console.log(ansObj);


//row with max1s:-->

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
// }
// function binSearch(arr,row){
//     let l=0;
//     let r=arr[row].length-1;
//     let firstIndex=arr[row].length;
//     while(l<=r){
//         let mid=Math.floor((l+r)/2);

//         if(arr[row][mid]===1){
//             firstIndex=mid;
//             r=mid-1;
//         }
//         else{
//             l=mid+1;
//         }
//     }
//     let count=arr[row].length-firstIndex;
//     return count;
// }
// let arr=[[0, 0, 0, 0],
// [0, 0, 0, 0],
// [0, 1, 1, 1],
// [0, 0, 1, 1]];
// console.log(rowWithMax1s(arr));



//reverse words/full:
// let s='    hi, my name is    Abhishek Adhikary'

// let s2=s.split(' ');

// let res='';

// for(let i=s2.length-1;i>=0;i--){
//     if(s2[i]!=""){
//         res+=s2[i]+' ';

//     }
// }
// console.log(res)


//pangram:--->

// function isPangram(sentence){

//     let alpha='abcdefghijklmnopqrstuvwxyz';

//     for(let i of alpha){
//         if (!sentence.includes(i)){
//             return false;

//         }
//     }
//     return true;
// }
// let sentence = "thequickbrownfoxjumpsoverthelaZydog";
// console.log(isPangram(sentence))


//max Words in a sentence:
// let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];

// let len=[];
// for(let i=0;i<sentences.length;i++){
//     len.push(sentences[i].split(' ').length);
// }
// console.log( Math.max(...len));



//valid anagram:--->>
// let s = "anagram", t = "nagaram";

// function isValidAngram(s,t){

//     if(s.length!==t.length){
//         return false;
//     }
//     let s1=s.split('').sort().join('');
//     let t1=t.split('').sort().join('');

//     return s1===t1;


// }
// console.log(isValidAngram(s,t))

//find common element
// let ar1 = [1, 5, 10, 20, 40, 80 ];
// let ar2 = [6, 7, 20, 80, 100];
// let ar3 = [3, 4, 15, 20, 30, 70, 80, 120];
// // Output: 20, 80
// let common=[];
// for(let i=0;i<ar1.length;i++){
//     if(ar2.includes(ar1[i]) && ar3.includes(ar1[i])){
//         common.push(ar1[i]);
//     }
// }
// console.log(common)






//longest common prefix:
// let strs = ["flower","flow","floght"];

// strs.sort();//reorder alphabatically:

// // console.log(strs);
// let res='';
// for(let i=0;i<strs[0].length;i++){
//     if(strs[0][i]!==strs[strs.length-1][i]){
//         res=strs[0].substring(0,i);
//         break;

//     }
// }
// console.log(res);


//next permutation:---->

// let arr=[1,2,3];

// function nextPermutation(arr){
//     let i=arr.length-2;

//     while(arr[i]>=arr[i+1]){
//         i--;
//     }

//     if(i>=0){
//         let j=arr.length-1;
//         while(arr[i]>=arr[j]){
//             j--;
//         }

//         [arr[i],arr[j]]=[arr[j],arr[i]];
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

// console.log(nextPermutation(arr));


//promises practice:1
// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let err=false;

//         if(!err){
//             resolve('wake up-01')
//         }
//         else{
//             reject('canr wkae up-01')
//         }
//     },3000)
// })
// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let err=false;

//         if(!err){
//             resolve('go for jim-02')
//         }
//         else{
//             reject('cant go for jim -02')
//         }
//     },4000)
// })
// const p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let x=0;

//         if(x==0){
//             resolve('get ready to office-03')
//         }
//         else{
//             reject('cant go office-03')
//         }
//     },1000)
// })

//normal execution:
// p1
// .then(res1=>{
//     console.log(res1);
//     p2.then(res2=>{
//         console.log(res2);
//         p3.then(res3=>{
//             console.log(res3);
//         }).catch(err3=>{
//             console.log(err3)
//         })
//     }).catch(err2=>{
//         console.log(err2)
//     })
// })
// .catch(err1=>{
//     console.log(err1);
// })

//better way of execution:-->
// Promise.all([p1,p2,p3]).then(res=>{
//     console.log(res)
// })
// .catch(er=>{
//     console.log(er)
// })


//promise practice-02:

// async function asyncFunc(){
//     try{
//         const p1=await new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 let err=false;

//                 if(!err){
//                     resolve('wake up-01')
//                 }
//                 else{
//                     reject('canr wkae up-01')
//                 }
//             },3000)
//         })
//         const p2=await new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 let err=false;

//                 if(!err){
//                     resolve('go for jim-02')
//                 }
//                 else{
//                     reject('cant go for jim -02')
//                 }
//             },4000)
//         })
//         const p3= await new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 let x=0;

//                 if(x!==0){
//                     resolve('get ready to office-03')
//                 }
//                 else{
//                     reject('cant go office-03')
//                 }
//             },1000)
//         })

//         // let r1=await p1;
//         // console.log(r1);
//         // let r2=await p2;
//         // console.log(r2);
//         // let r3=await p3;
//         // console.log(r3);

//         return [p1,p2,p3]
//     }
//     catch(err){
//         return err;
//     }
// }


// asyncFunc()
// .then(res=>{
//     console.log(res)
// })
// .catch(err=>{
//     console.log(err)
// })




//promise practice:03 better approach use function:
// const p1=()=>{return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let err=false;

//         if(!err){
//             resolve('wake up-01')
//         }
//         else{
//             reject('canr wkae up-01')
//         }
//     },3000)
// })
// }
// const p2=()=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let err=false;

//         if(!err){
//             resolve('go for jim-02')
//         }
//         else{
//             reject('cant go for jim -02')
//         }
//     },4000)
// })
// }
// const p3=()=>{


//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let x=0;

//             if(x!==0){
//                 resolve('get ready to office-03')
//             }
//             else{
//                 reject('cant go office-03')
//             }
//         },1000)
//     })
// }

// p1()
// .then(res1=>{
//     console.log(res1);
//     p2().then(res2=>{
//         console.log(res2);
//         p3().then(res3=>{
//             console.log(res3);
//         }).catch(err3=>{
//             console.log(err3)
//         })
//     }).catch(err2=>{
//         console.log(err2)
//     })
// })
// .catch(err1=>{
//     console.log(err1);
// })





//remove duplicate:-->>

// let arr=[1,1,5,5,4,4,3,3,3,2,0];
// approach1:

// let unique=[];

// for(let i of arr){
//     if(!unique.includes(i)){
//         unique.push(i);

//     }

// }
// console.log(unique)

//approach:02

// let Output=arr.filter((elem,index)=>{
//     return arr.indexOf(elem)===index;
// })
// console.log(Output)

//approach:3
// let set=new Set(arr);
// console.log([...set]);

//approach 4:count no of time repeated//note:arr will be sorted:

// let obj={};

// for(let i of arr){
//     obj[i]=obj[i]?obj[i]+1:1
// }

// console.log(obj);


//find prime numbers:-->

// function isPrime(n){
//     if(n==0 || n==1){
//         return false;
//     }
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i===0){
//             return false
//         }
//     }
//     return true;
// }
// console.log(isPrime(2))


//kadane's algorithm:

// let arr=[1,2,3,4,5,0,-2,-3,5,8];

// function maxSumSubArr(arr){
//     let maxSum=arr[0];
//     let sum=0;

//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i];

//         maxSum=Math.max(sum,maxSum);

//         if(sum<0){
//             sum=0;
//         }


//     }
//     return maxSum;
// }

// console.log(maxSumSubArr(arr))




//buysell stock:

// let arr=[1,3,8,0,2,4,3];
// let maxProfit=-Infinity;

// let minPrice=arr[0];

// for(let i=1;i<arr.length;i++){
//     let curProfit=arr[i]-minPrice;

//     if(minPrice>arr[i]){
//         minPrice=arr[i];

//     }
//     if(maxProfit<curProfit){
//         maxProfit=curProfit;
//     }


// }

// console.log(maxProfit);






//remove adjecent duplicates:
// let arr=[1,1,1,2,2,3,4,4,5,5,1];

// let a=[];

// for(let i=0;i<arr.length;i++){
//     // a.push(arr[i]);

//     if (!a.length){
//         a.push (arr[i]);
//     }
//     else if(a[a.length-1]!==arr[i]){
//         a.push(arr[i]);
//     }

// }
// console.log(a)

//replace string:

// let str='my name is Abhishek.---- @ !$^&()* adhikary';
// let res=str.replace(/abhishek/gi,'Baibav');
// let res=str.replace(/[-!$^&()*.0-9]/gi,'')//specific symbols
// let res=str.replace(/[^a-z0-9]/gi,'')//all symbols

// console.log(res);


// let s='hi, my name is abhishek';
// for(let i of s){
//     console.log(i,'--->',i.charCodeAt())
// }

//arr map :-->

// let arr=[{
//     name:'abhishek adhikary',
//     age:25,
//     email:'abc@gmail.com'
// },{
//     name:'abhishek adhikary',
//     age:23,
//     email:'abc@gmail.com'
// },{
//     name:'abhishek adhikary',
//     age:29,
//     email:'abc@gmail.com'
// }];
// // let arr=[1,2,3,4,5]


// let op=arr.reduce((a,b)=>{
//     return a+b.age
// },0)
// console.log(op);


//single swap makes two string equal:

// function swapToEquate(s1,s2){

//     if(s1.length!==s2.length){
//         return false;
//     }
//     else if(s1===s2){
//         return false;
//     }

//     let count=0;
//     for(let i=0;i<s1.length;i++){
//         if(s1[i].toLowerCase()!==s2[i].toLowerCase()){
//             count=count+1;
//         }
//         if(count>2){
//             return false;
//         }
//     }
//     return true;

// }

// console.log(swapToEquate('Sharpener','sharepnre'));


//twosum: return two indexes,whose element sum is qual to the target:

// let arr=[1,2,3,4,6];


// function twoSum(arr,t){

//     let map=new Map();

//     for(let i=0;i<arr.length;i++){
//         let val=t-arr[i];

//         if(map.has(val)){
//             return [i,map.get(val)].sort((a,b)=>a-b);
//         }
//         else{
//             map.set(arr[i],i)
//         }
//     }
// }
// console.log(twoSum(arr,10));





// let c=1;
// if(c){
//     console.log('c=',c)
// }else{
//     console.log('c= 0')
// }

//index of kth largest element:

// let k=2;
// const arr=[1,6,2,8,3,5,99];

// let arr2=[...arr];
// arr2.sort((a,b)=>{
//     return a-b;
// });
// //kth position means : k-1 th index:

// if((k-1)<arr2.length){
//     console.log(arr.indexOf(arr2[k-1]))
// }


//object manipulation:--->
// let obj={
//     first_name:'abhishek',
//     last_name:'adhikary',
//     user_email_id:'abhishek.112031@gmail.com'
// }

// // console.log(Object.keys(obj).length)

// let res={}
// for(let [key,val] of Object.entries(obj)){
//     let arr=key.split('_');

//     for(let i=1;i<arr.length;i++){
//         arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);

//     }

//     res[arr.join('')]=val;


// }

// console.log(res);


//string prob:

// let str='hi my name is abhishek adhikary, i am a software developer';


// let arr=str.split(' ');

// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
// }
// console.log(arr.join(' '));



//kadanes algorithm: t findout max sub arr sum:

// let arr=[11,3,5,12,23,-90];

// let maxSum=arr[0];
// let curSum=0;

// for(let i=0;i<arr.length;i++){
//     curSum=curSum+arr[i];
//     maxSum=Math.max(curSum,maxSum);

//     if(curSum<0){
//         curSum=0;
//     }
// }

// console.log(maxSum);

//buy-sell stock:

// let arr=[1,2,3,4,5,6,7];

// let minprice=arr[0];
// let maxprofit=-Infinity;

// for(let i=1;i<arr.length;i++){
//     let curProfit=arr[i]-minprice;

//     if(maxprofit<curProfit){
//         maxprofit=curProfit;
//     }
//     if(minprice>arr[i]){
//         minprice=arr[i]
//     }



// }
// console.log(maxprofit);

//reverse string:-->

// let str = 'hi, my name is     abhishek adhikary   ';

// //reverse words:-->

// let str2 = str.split(' ');
// // console.log(str)

// let res = '';
// for (let i = str2.length - 1; i >= 0; i--) {
//     if (str2[i] !== '') {
//         res += str2[i] + " ";

//     }
// }

// console.log(res);


// let arr=['flower','flote','floter','flow'];

// arr.sort()
// // console.log(arr)

// for(let i=0;i<arr[0].length;i++){
//     if(arr[0][i]!==arr[arr.length-1][i]){
//         console.log(arr[0].substring(0,i));
//         break;
//     }
// }


//sorting:
// bubble sort:--->
// let arr=[8,5,4,9];

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j+1];
//             arr[j+1]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// console.log(arr);



// //selection sort():
// for(let i=0;i<arr.length;i++){
//     let minpos=i;
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[minpos]>arr[j]){
//             minpos=j;
//         }
//     }
//     [arr[minpos],arr[i]]=[arr[i],arr[minpos]];
// }

// console.log(arr)



//insertion sort:
// for(let i=1;i<arr.length;i++){
//     let a=arr[i];
//     let j=i-1;

//     while(j>=0 && a<arr[j]){
//         arr[j+1]=arr[j];
//         j--
//     }
//     arr[j+1]=a
// }
// console.log(arr)




//pro String:
// Example 1:

// Input: S1 = "sharpener", S2 = "pharsener"

// Output: True

// Explanation: We can swap the 0th and 4th character of S2 to make it equal to S1.


// function isProString(s1,s2){
//     if(s1.length!==s2.length){
//         return false;
//     }
//     else{
//         let count=0;
//         // s11=s1.toLowerCase().split('').sort();
//         // s22=s2.toLowerCase().split('').sort();

//         for(let i=0;i<s1.length;i++){
//             if(s1[i].toLowerCase()!==s2[i].toLowerCase()){
//                 count=count+1;
//             }
//             if(count>2){
//                 return false;
//             }
//         }
//         return true;


//     }
// }

// console.log(isProString("sharpener","pharsener"))

// function nextPermutation(arr){
//     let i=arr.length-2;
//     while(arr[i]>=arr[i+1]){
//         i--;
//     }

//     if(i>=0){
//         let j=arr.length-1;

//         while(arr[i]>=arr[j]){
//             j--;
//         }
//       [arr[i],arr[j]]=[arr[j],arr[i]]
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

// console.log(nextPermutation([1,2,3]))


//remove outer parentheses:

// let s='(())';


//row with max 1's:--->
// let arr=[[0, 0, 0, 0],
// [0, 0, 0, 0],
// [0, 1, 1, 1],
// [0, 0, 1, 1]];

// function rowWithMax1s(arr){

//     let maxCount=0;
//     row=-1;
//     for(let i=0;i<arr.length;i++){
//         let coir=binSearch(arr,i);

//         if(maxCount<coir){
//             maxCount=coir;
//             row=i;
//         }
//     }
//     return row;

//     function binSearch(arr,row){
//         let l=0;
//         let r=arr[0].length-1;
//         let firstIndex=arr[0].length;

//         while(l<=r){
//             let mid=Math.floor((l+r)/2);

//             if(arr[row][mid]===1){
//                 r=mid-1;
//             }
//             else{
//                 r=m+1;
//             }
//         }

//     }


// }


//find the fine:
//Input:
// N = 4, date = 12
// car[] = {2375, 7682, 2325, 2352}
// fine[] = {250, 500, 350, 200}
// Output:
// 600
// Explantion:
// The date is 12 (even), so we collect the
// fine from odd numbered cars. The odd
// numbered cars and the fines associated
// with them are as follows:
// 2375 -> 250
// 2325 -> 350
// The sum of the fines is 250+350 = 600


// let car = [2375, 7682, 2325, 2352];
// let fine = [250, 500, 350, 200];


// function findTheFineforOddCars(car,fine){

//     let finesOfOddCars=[];

//     for(let i=0;i<car.length;i++){
//         if(car[i]%2!==0){
//             finesOfOddCars.push(fine[i]);
//         }
//     }
//     return finesOfOddCars.reduce((a,b)=>a+b);
// }
// console.log(findTheFineforOddCars(car,fine))


//binary search:--->


// function binSearch(arr,t){
//     let l=0,r=arr.length-1;

//     while(l<=r){
//         let mid=l+Math.floor((r-l)/2);

//         if(arr[mid]===t){
//             return mid;
//         }
//         else if(arr[mid]>=t){
//             r=mid-1;
//         }
//         else{
//             l=mid+1;
//         }
//     }
//     return -1;
// }
// console.log(binSearch(arr,1))


//rotatted sorted array searching:
// let arr=[4,5,6,7,1,2,3];

// const rotattedSortedArrSearch=(arr,t)=>{
//     let l=0,r=arr.length-1;

//     while(l<=r){
//         //to avoid integer overflow :their sum (l+r) exceeds the maximum representable value for the data type, an integer overflow can occur
//         let mid=l+Math.floor((r-l)/2);

//         if(arr[mid]===t){
//             return mid;
//         }
//         else if(arr[l]<=arr[mid]){
//             if(arr[l]<=t && t<=arr[mid]){
//                 r=mid-1;

//             }
//             else{
//                 l=mid+1;
//             }
//         }
//         else{
//             if(arr[r]>=t && t>=arr[mid]){
//                 l=mid+1;

//             }else{
//                 r=mid-1;
//             }

//         }
//     }
//     return -1;
// }

// console.log(rotattedSortedArrSearch(arr,4))

//chocolate distribution problem:--->

// let arr=[12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50]//op:2

// function chocoDistribution(arr,m){
//     arr.sort((a,b)=>a-b);

//     let diff=Infinity;

//     for(let i=0;i<arr.length;i++){

//         if(diff>=(arr[i+m-1]-arr[i])){
//             diff=(arr[i+m-1]-arr[i]);
//         }

//     }
//     return diff;
// }
// console.log(chocoDistribution(arr,7))



//reverse words in a string:
// let str='the sky is    blue' ; //'blue is sky the'

// let str2=str.split(' ');
// let res=[];

// for(let i=str2.length-1;i>=0;i--){
//     if(str2[i]!==""){
//         res.push(str2[i]);
//     }
// }
// console.log(res.join(' '));



// let arr=['flow','flower','flood','florish'];

// arr.sort();
// // console.log(arr);

// for(let i=0;i<arr[0].length;i++){
//     if(arr[0][i]!==arr[arr.length-1][i]){
//         console.log(arr[0].substring(0,i));
//         break;
//     }

// }



// let arr='abhishek';
// console.log(arr.substring(1,5));//1-->4

//replace:-->
// let s='hi,@ my -- name is && Abhishek adhikary and iam abhishek, learning node js '
// let res=s.replace(/[^a-z0-9]/gi,' ');
// console.log(res)


//subarr printing:--->
// let arr=[1,2,3,4];
// let subArr=[];
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<=arr.length;j++){
//         subArr.push(arr.slice(i,j));
//     }
// }
// console.log(subArr);

//array or not:
// const arr=[1,2,3,4];
// console.log(Array.isArray(arr))
// delete arr[0];
// console.log(arr.length,arr)//4, [ <1 empty item>, 2, 3, 4 ];


//prime numbers:
// function isPrime(n){
//     if(n==0||n==1){
//         return false;
//     }
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i===0){
//             return false;
//         }
//     };
//     return true;
// }
// // console.log(isPrime(11))
// const arr=[];
// for(let i=0;i<100;i++){
//     if(isPrime(i)){
//         arr.push(i)
//     }

// }
// console.log(arr);

//sieve algorithm:


//row with max 1s:
// let arr=[[0, 0, 0, 0],
// [0, 0, 0, 0],
// [0, 1, 1, 1],
// [0, 0, 1, 1]];


// function rowWithMax1s(arr){
//     let row=-1;
//     let maxCountOf1s=0;

//     for(let i=0;i<arr.length;i++){
//         let coir=binSearch(arr,i);//count of 1s in ith row

//         if(coir>maxCountOf1s){
//             maxCountOf1s=coir;
//             row=i;
//         }
//     }
//     return row;

//     function binSearch(arr,row){
//         let l=0,r=arr[row].length-1;
//         let firstindex=arr[row].length;

//         while(l<=r){
//             let mid=Math.floor((l+r)/2);


//             if(arr[row][mid]===1){
//                 firstindex=mid;
//                 r=mid-1;
//             }
//             else{
//                 l=mid+1;

//             }
//         }

//         let count=arr[row].length-firstindex;
//         return count;
//     }
// }
// console.log(rowWithMax1s(arr));


//some array methods:
// let  matrix = [[11,5,9],[10,11,13],[12,13,15]];
// let x=matrix.flat();
// console.log(x,x==matrix)

// let arr=new Array();
// arr.push(10)
// arr.push(10)
// console.log(arr);


// let arr=new Array(5).fill(2);
// console.log(arr)

//array concat:-->
// let arr1=[1,2,3,4,5];
// let arr2=[6,7,8,9,0];
// let arr3=[8,4,3,1];
// console.log(arr1.concat(arr2).concat(arr3))


//string repeat method:--->
// let str='abc';
// let res=str.repeat(2);
// console.log(res);



//remove consecutive:'aaabbbc'=>abc
// function removeConsecutiveChar(s){
//     let charArr=[];
//     for(let i of s){
//         if(!charArr.length || charArr[charArr.length-1]!==i){
//             charArr.push(i)
//         }
//     }
//     return charArr.join('')
// }
// console.log(removeConsecutiveChar('aaabbbcccbccaaa'))



//even:

// let print_even = (n) => {

//     let p = 2;

//     while (p <= 10) {
//         // p%2==0

//         console.log(p)

//         p += 2;
//     }

// }


//kadanes algorithm:
// let arr=[1,2,-3,4,5,-6,10];

// function kadanesAlgo(arr){
//     let max=arr[0];
//     let sum=0;

//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[0];
//         max=Math.max(sum,max);

//         if(sum<0){
//             sum=0;
//         }
//     }
//     return max;
// }

// console.log(kadanesAlgo(arr))


//remove outer parentheses:

// let s='(())(())';

// function removeOuterParenthesis(s){
//     let count=0;//1
//     let ans='';//()
//     for(let i of s){
//         if(i=='('){
//             if(count){
//                 ans+=i;

//             }
//             count++
//         }
//         else{
//             count--;
//             if(count){
//                 ans+=i;
//             }
//         }
//     }
//     return ans;
// }
// console.log(removeOuterParenthesis(s))


//remove duplicates:
//sol-1
// let arr=[2,2,5,5,1,1,0]
// function removeDuplicate(arr){
//     // let res=[];
//     // for(let i of arr){
//     //     if(!res.includes(i)){
//     //         res.push(i);
//     //     }
//     // }
//     // return res;


// }
// console.log(removeDuplicate(arr))


///sol-2:
// let op=arr.filter((elem,ind)=>{
//     return arr.indexOf(elem)===ind;

// });
// console.log(op)


//sol3:
// let map=new Map();
// for(let i of arr){
//     map.set(i,map.has(i)?map.get(i)+1:1)
// }

// for(let i of map.keys()){
//     console.log(i)
// }

//decode string:--->
// let s = "3[a2[c]]";

// function decodeString(s){
//     let stack=[];
//     for(let i of s){
//         if(i!==']'){
//             stack.push(i);
//             continue;
//         }

//        let str='';
//        let num='';

//        while(stack[stack.length-1]!=='['){
//         str=stack.pop()+str;
//        }

//        stack.pop();

//        while(parseInt(stack[stack.length - 1])){
//         num=stack.pop()+num;
//        };

//        let segment=str.repeat(Number(num));
//        stack.push(segment);



//     }
//     return stack.join('')
// }

// console.log(decodeString(s));


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
// console.log(reverseAnum(122))
//obj key-val manipulation:--->
// let obj={
//     first_name:'Abhishek',
//     last_name:'Adhikary',
//     user_email_id:'abhishek.112031@gmail.com'
// }
// let resObj={};
// for(let [key,val] of Object.entries(obj)){
//     let arr=key.split('_');
//     for(let i=1;i<arr.length;i++){
//         arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
//     }
//     resObj[arr.join('')]=val;
// }
// console.log(resObj);


//buy-sell stock:

// let arr=[1,5,2,8,10,7,20];

// function buySellStock(arr){
//     let curPrice=arr[0];
//     let maxProfit=-Infinity;

//     for(let i=1;i<arr.length;i++){
//         curProfit=arr[i]-curPrice;

//         if(curPrice>arr[i]){
//             curPrice=arr[i];
//         }
//         if(maxProfit<curProfit){
//             maxProfit=curProfit;
//         }
//     }
//     return maxProfit;

// }

// console.log(buySellStock(arr))

//generate random number:

// console.log(Math.round(Math.random()*2))

// function subArrWith0sum(arr){
//     let res=[];

//     for(let i=0;i<arr.length;i++){
//         let prefix=0;
//         for(let j=i;j<arr.length;j++){
//             prefix+=arr[j];

//             if(prefix==0){

//                 res.push(arr.slice(i,j+1));
//                 // res.push([i,j])
//             }
//         }
//     }
//     return res;

// }
// let arr = [0,6, 3, -1, -3, 4, -2, 2, 4, 6, -12, -7];
// console.log(subArrWith0sum(arr))


//join function:

// let arr=['a','b','c'];

// console.log(typeof arr.join());

//string replace:--->
// let str='hi, my name is abhishek';

// // let op=str.replace(/abhishek/gi,'animesh');
// let op=str.replace(/[^a-z0-9]/gi,'')

// console.log(op);


// `${12} X ${i} = ${12*i}`;


//str equality:
// let arr1=[1,2,3];
// let arr2=[1,2,3];

// let s1='abhi';
// let s2='abhi';
// // console.log(s1===s2)//true;
// // console.log(arr1===arr2)//false

// function change(s,arr){
//     s+='s';
//     arr.push(4)
//     return [s,arr];
// }
// console.log(change(s1,arr1),s1,arr1)



//stack:
// class Stack{
// }


//nge:

// let arr=[1,2,1,9,3,6,2,4];
// let arr2=[...arr,...arr];

// let res=[];

// for(let i=0;i<arr.length;i++){
//     let nge=-1;
//     for(let j=i+1;j<arr2.length;j++){
//         if(arr[i]<arr2[j]){
//             nge=arr2[j];
//             break;
//         }


//     }
//     res.push(nge)
// }
// console.log(res);


// let obj={
//     name:'abhishek',
//     age:32,
//     friend:{
//         name:'shuvam',
//         age:29,
//         friend:{
//             name:'shoumik',
//             age:33,
//             getDetails:function(){
//                 console.log(this.name,this.age)//hare also we can not use arraow function
//             }
//         }
//     }
// }
// obj.friend.friend.getDetails();

// function sum(n){
//     if(n==1){
//         return 1;
//     }
//     else{
//         return sum(n-1)+n;
//     }
// }
// console.log(sum(3))



// function reverse(n){
//     var num=n;
//     var rev=0;
//     while(num  != 0){
//         rev=(rev*10)+(num%10);
//         num=Math.floor(num/10);

//     }
//     return rev;
// }
// console.log(reverse(60))


//prime no :

// function isPrime(n){
//     if(n==0 || n==1){
//         return false;
//     }
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i===0){
//             return false;
//         }
//     }
//     return true;
// }
// for(let i=1;i<=100;i++){
//     if(isPrime(i)){
//         console.log(i)
//     }
// }



//topic to practice:

//1) node js 
//2)chat app
//3)aws s3 cicd
//4)stack and queue 
//5)linked list



// let arr=[1,2,3,4];
// const res=[];
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<=arr.length;j++){
//        res.push(arr.slice(i,j));
//     }
// }
// console.log(res)


//sliding window:
//max sum of given length sub arr:

// let arr=[1,2,3,-3,7,-1,6];
// let k=3;

// //sum upto k;
// let s=0
// for(let i=0;i<k;i++){
//     s+=arr[i];

// }

// let maxSum=s;


// for(let i=k;i<arr.length;i++){
//     s+=arr[i]-arr[i-k];
//     if(s>maxSum){
//         maxSum=s;
//     }
// }
// console.log(maxSum)


//reverse words:
// let s='i love coding, curreantly learning node js'

// function revWords(s){
//    let s2=s.split(' ')
//    let res=[];

//    for(let i=s2.length-1;i>=0;i--){
//        if(s2[i]!=="" || s2[i] != " "){
//         res.push(s2[i])
//        }
//     }
//     return res.join(' ')
// }
// console.log(revWords(s))



//longest subString:

// let s='geeksforgeeks'
// function longestSubStringLength(s){

//     let start=0,end=0,maxlen=0,set=new Set();

//     while(end<s.length){
//         if(!set.has(s[end])){
//             set.add(s[end]);
//             maxlen=Math.max(maxlen,set.size);
//             end++;
//         }
//         else{
//             set.delete(s[end]);
//             start++;
//         }
//     }
//     return maxlen;

// }
// console.log(longestSubStringLength(s))



//longest common substring:---->
// let arr=['owr','fower','flower','flower'];

// function longestSubStr(arr){

//     arr.sort();

//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[0].length;j++){
//             if(arr[0][j]!==arr[arr.length-1][j]){
//                 return arr[0].substring(0,j);
//             }
//         }
//         return arr[0];
//     }
// }
// console.log(longestSubStr(arr))


//obj keyManipulation:--->
// let obj={
//     user_first_name:'abhishek',
//     last_user_name:'adhikary',
//     user_email_id:'abc@gmail.com'
// }


// let res={};

// for(let [key,value] of Object.entries(obj)){
//     let keyArr=key.split('_');

//     for(let i=1;i<keyArr.length;i++){
//         keyArr[i]=keyArr[i].charAt(0).toUpperCase()+keyArr[i].slice(1);
//     }
//     let newKey=keyArr.join('');
//     res[newKey]=value;
// }
// console.log(res);


//valid palindrome string or not:---->

// function isValidPalindromeString(s) {
//     //method:-01
//     // let res='';

//     // for(let i=0;i<s.length;i++){
//     //     if((s[i].charCodeAt()>=48 && s[i].charCodeAt()<=57 ) || (s[i].charCodeAt()>=65 && s[i].charCodeAt()<=90 ) || (s[i].charCodeAt()>=97 && s[i].charCodeAt()<=122 )){
//     //         res+=s[i].toLowerCase();
//     //     }
//     // }

//     // return res===res.split('').reverse().join('');




//     //----------***-----------------****---------------//
//     // method2:

//     let s2 = s.replace(/[^a-z0-9]/gi, '');
//     return s2 === s2.split('').reverse().join('');





// }

// console.log(isValidPalindromeString('abb,a'))



//pattrn practice:--->
//right angle triangle leftside straight:-->

// let n=5;

// for(let i=1;i<=n;i++){
//     let s=''
//     for(let j=0;j<i;j++ ){
//         s+='*'
//     }
//     console.log(s)
// }

//right angle triangle right side straight:-->

// for(let i=1;i<=n;i++){
//     let space='';
//     for(let j=0;j<n-i;j++){
//         space+=' ';
//     }
//     for(let k=0;k<i;k++){
//         space+='*';
//     }
//     console.log(space)
   
// }


//double triangle pattern:--->
// let n=5;
// let s='';
// for(let i=1;i<=n;i++){
//     for(let j=0;j<i;j++){
//         s+='*';
//     }
//     for(let k=0;k<n-i;k++){
//         s+=' ';
//     }
//     for(let l=0;l<i;l++){
//         s+='*';
//     }
//     s+='\n';

// }
// console.log(s)

//iso-scaled triangle:--->

// let n=5;
// let pattrn='';
// let pattern2='';
// for(let i=1;i<=n;i++){
//     //for space print:
//     for(let s =0;s<n-i;s++){
//         pattrn+=' ';

//     }
//     //start printing:
//     for(let j=0;j<(2*i-1);j++){
//         pattrn+='*';
//     }
//     pattrn+='\n';

// }
// // console.log(pattrn);

// for(let i=n-1;i>0;i--){
//     for(let j=0;j<n-i;j++){
//         pattern2+=' ';
//     }
//     for(let k=0;k<(2*i-1);k++){
//         pattern2+='*';
//     }
//     pattern2+='\n';
// }
// // console.log(pattern2)
// console.log(pattrn+pattern2);



//print prime numbers:

// function isPrime(n){
//     if(n==0 || n==1){
//         return false;
//     }
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i==0){
//             return false;
//         }
//     }
//     return true;
// }

// for(let i=1;i<=100;i++){
//     if(isPrime(i)){
//         console.log(i)
//     }
// }
