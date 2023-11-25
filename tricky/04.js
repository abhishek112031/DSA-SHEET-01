console.log("0 || 1 = "+(0 || 1));//1
console.log("1 || 2 = "+(1 || 2));//1
console.log("0 && 1 = "+(0 && 1));//0
console.log("1 && 2 = "+(1 && 2));//2


//The or (||) operator. In an expression of the form X||Y, X is first evaluated and interpreted as a boolean value. If this boolean value is true, then true (1) is returned and Y is not evaluated,

//The and (&&) operator. In an expression of the form X&&Y, X is first evaluated and interpreted as a boolean value. If this boolean value is false, then false (0) is returned and Y is not evaluated, since the “and” condition has already failed. If this boolean value is “true”, though, we still don’t know if X&&Y is true or false until we evaluate Y, and interpret it as a boolean value as well.


// console.log(0||1);