// `Call is a function that helps you change the context of the invoking function. In layperson's terms, it helps you replace the value of this inside a function with whatever value you want.`

// `Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.

// Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.`

// `In JavaScript, the "this" keyword is a special identifier that refers to the context in which a function is called.`

const obj1 = {
    name: 'abhishek',
    age: 23,
    sex: 'male',
    // getDetails: function (place,state) {
    //     console.log(this.name, this.age, this.sex,'from',place,state);
    // }
}
function  getDetails (place,state) {
    console.log(this.name, this.age, this.sex,'from',place,state);
}


const obj2 = {
    name: 'animesha',
    age: 13,
    sex: 'female',
   
}

getDetails.call(obj2,'kolaghat','west bengal');

// obj1.getDetails.apply(obj2,['kolaghat','west bengal']);

// const details = obj1.getDetails.bind(obj2,'kolaghat','west bengal');
// details()


