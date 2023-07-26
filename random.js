// Returns a random integer from 0 to 9:
// Math.floor(Math.random() * 10);


//specific interval:both included
// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }


// generate random no from smallest btn greatest 5 digit no: 
let smallest=Math.pow(10,4);
// console.log(smallest)
let greatest=Math.pow(10,5)-1;


let random=Math.floor((Math.random()*(greatest-smallest+1)))+smallest;
console.log(random)
