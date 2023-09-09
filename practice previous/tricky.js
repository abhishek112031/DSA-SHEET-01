// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (()=> {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         })();
//     }
// };
// myObject.func();


//curring:

// function sum(x){
//     if(arguments.length===2){
//         return arguments[0]+arguments[1];
//     }
//     else{
//         return function(y){
//            return x+y;
//         }
//     }
// }
// console.log(sum(2,3),sum(2)(3))

// other method:
// function sum(x, y) {
//     if (y !== undefined) {
//       return x + y;
//     } else {
//       return function(y) { return x + y; };
//     }
//   }


//string+num:
// console.log(1 +  "2" + "2");//
// console.log(1 +  +"2" + "2");
// console.log(1 +  -"1" + "2");
// console.log(+"1" +  "1" + "2");
// console.log( "A" - "B" + "2");
// console.log( "A" - "B" + 2);


console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));