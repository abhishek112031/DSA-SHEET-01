var arr1 = "john".split('');
var arr2 = arr1.reverse();//
var arr3 = "jones".split('');['j','o','n','e','s']

// console.log(arr1===arr2)

arr2.push(arr3);//['n','h','o','j',['j','o','n','e','s']];

console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
console.log(arr2);