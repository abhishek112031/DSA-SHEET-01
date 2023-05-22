// let set=new Set();

// set.add('a');
// set.add('b');
// set.add('c');
// set.add('c');


// console.log(set.values())


//1.adding to set (only unique)
let arr=[10,1,2,2,3,3,3,4,4,4,5,5,5,6,7];

let s=new Set(arr);
// console.log(s.values());
console.log(s)
let unq=[];

s.forEach(element => {
    unq.push(element)
});

console.log(unq);

//2.adding to set (only unique)
let s1=new Set();

s1.add(1);
s1.add(2);

console.log(s1,s1.values());