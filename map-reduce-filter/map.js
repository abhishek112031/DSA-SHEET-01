// const originalArray = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' }
//   ];
  
//   // Suppose you want to change the object with id 2
//   const updatedArray = originalArray.map((item) => {
//     if (item.id === 2) {
//       // Create a new object with the desired changes
//       return { ...item, name: 'Updated Bob',sex:'male' };///*see below explaination */
//     }
//     // For other objects, just return them as is
//     return item;
//   });
  
//   console.log(updatedArray);

// when you declare an object with duplicate keys, the last occurrence of the key will overwrite the previous ones



//discussion:--->
let object={
    name:'abhi',
    age:23,
    sex:'male',
    age:56
}

console.log(object)
  