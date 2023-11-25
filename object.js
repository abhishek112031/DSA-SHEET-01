// let obj={
//     name:'abhishek',
//     age:22,
//     dob:'15.08.1991'
// }


// // console.log(Object.values(obj).length)

// let arr=[1,2,3,4,5];

// console.log(typeof(arr),Array.isArray(arr))



//copying object:

const obj={
    name:'abhishek',
    age:23,
    sex:'male',
    add:{
        parmanent:'dabadari',
        present:'kharagpur'
    }
}

// const copyObj={...obj};
// console.log(copyObj);
const obj2=Object.create(obj);
obj2.name='bikash';
console.log('obj2=>',obj2)

console.log(Object.getPrototypeOf(obj2))

