let arr = [10, 5, 3, 4, 3, 5, 6];

// let obj={};
    
// for(let i of arr){
//     obj[i]=obj[i]?obj[i]+1:1

    
// }
// console.log(obj)

function firstRepeating(arr){

    let obj={};
    
    for(let i of arr){
        obj[i]=obj[i]?obj[i]+1:1
    
        
    }
    for(let i of arr){
        if(obj[i]>1){
            return i;
        }
       
       
    }
    return -1;
}

console.log( firstRepeating(arr))
// let obj={};