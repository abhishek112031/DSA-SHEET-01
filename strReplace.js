
//string replace:--->
let str='hi, my name is abhishek';

// let op=str.replace(/abhishek/gi,'animesh');
let op=str.replace(/[^a-z0-9]/gi,'')

console.log(op);