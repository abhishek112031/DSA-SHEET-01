// let i=0;
// while(i<=8){
//     // console.log(i);
//     i++;
// }


//write a function to generate given no of random charstring:

//it can be used for generate captcha:
// function generateRandomChar(len){
//     let chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*';
//     let resStr='';
//     for(let i=0;i<len;i++){
//         let randomNoIdx=Math.floor(Math.random()*chars.length);
//         resStr+=chars[randomNoIdx];

//     }
//     return resStr;
// }
// console.log(generateRandomChar(10))



//sort an arry of strings by no of char:

// let arr=['abhishek','vaibhav','monalisha','santoshuyuy'];

// function sortByChar(arr,char){

//     function countOf(eachstr){
//         let count=0;
//         for(let i of eachstr){
//             if (i===char){
//                 count++;
//             }

//         }
//         return count;
//     }

//     arr.sort((a,b)=>{
//         if(countOf(a)===countOf(b)){
//             return b.length-a.length;//decreasing order;
//         }
//         else{
//             return countOf(b)-countOf(a);

//         }

//     })
//     return arr;

// }
// console.log(sortByChar(arr,'o'))



//array jump:
