// const a=10.7+'volvo';
// console.log( a)

// const b=5+'5';
// console.log(typeof b ==='string')


// console.log(typeof NaN)



// (function () {
//     var a = b = 3;
// })();

// console.log("a defined? " + (typeof a !== 'undefined'));//false
// console.log("b defined? " + (typeof b !== 'undefined'),b);//true,global




// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);//bar
//         console.log("outer func:  self.foo = " + self.foo);//bar
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);//undefined
//             console.log("inner func:  self.foo = " + self.foo);//bar
//         }());
//     }
// };
// myObject.func();



//function currying:--->
// function sum(a){
//     return function(b){
//         return function (c){
//             return function(d){
//                 return function(){
//                    return a*b*c*d;
//                 }
//             }
//         }
//     }
// }
// console.log(sum(1)(3)(2)(4)())

//both way function currying /normal function:

//making a function that can be called both ways:

// function sum(x){
//     if(arguments.length===2){
//         return arguments[0]+arguments[1];
//     }
//     return function(y){
//         return x+y;
//     }
// }
// console.log(sum(1,2));
// console.log(sum(1)(2));


// console.log("0 || 1 = "+(0 || 1));
// console.log("1 || 2 = "+(1 || 2));
// console.log("0 && 1 = "+(0 && 1));
// console.log("1 && 2 = "+(1 && 2));


var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);