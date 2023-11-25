// function normalFunction (){
//     console.log(arguments[0])

// }
// normalFunction(1,2,3,4,5)


function sum(){
    if(arguments.length>1){
        return [...arguments].reduce((a,b)=>a+b)
    }
    else{
        return function(){
            
        }
    }
}
console.log(sum(1,2,3))


