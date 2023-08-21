// function sample() {

//     for (var i = 0; i <= 5; i++) {

//         setTimeout(() => console.log(i), 1000);

//     }

// }
// sample()




// setImmediate(() => {

//     console.log("first")

// })

// setTimeout(() => {

//     console.log("second")

// })

// console.log("third");




// 3. Write a function to generate random number between 10 and 99?
// function genRandom(min,max){
//     let random=Math.floor(Math.random()*(max-min+1))+min;
//     console.log(random);

// }
// genRandom(10,99)



// console.log(x)
// let x;


// function fun(){

// return arguments;
// }
    
// console.log(fun(1,2));





`6. Let arr=[7,8,9,10]

Write a function to check if the given number "n" exists in the array.

If present remove the number from the array , return the remaining array excluding the number else print element not present.



Example Input 1



arr=[7,8,9,10] , n=8



Output



arr=[7,9,10]



Example Input 2



arr=[7,8,9,10] , n=10



Output



"Element not present"`

// ans:-->
// let arr=[7,8,9,10] , n=8
// function removeThis(n,arr){
//     if(!arr.includes(n)){
//         return 'not found!!!'
//     }
//     let index=arr.indexOf(n);
//     arr.splice(index,1);
//     return arr;

// }
// console.log(removeThis(n,arr));



//obj itration:
// let obj1={
//     name:'abhishek',age:23,sex:'male'
// }

// for(i in obj1){
//     console.log(i)
// }


//higher order function:

// function higherOrder(f1){
//     return function(){
//         return f1();
//     }
// }
// higherOrder(function f1(){
//     console.log('hiii')
// })()

