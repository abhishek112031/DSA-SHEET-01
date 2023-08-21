// console.log('bar:',bar);
// bar=15;
// var foo=1;
// console.log('foo:',foo,'bar:',bar);
// var bar;



// greet();
// var greet=function(){
//     console.log('goodmorning!')
// }
//op:type error:greet is not a function;



var v=10;
(()=>{
    console.log(v);
    var v=20;
    x=8;
    console.log(v)
})()
console.log(v);
console.log(x)