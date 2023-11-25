const dateMilsec= Date.now();
const date2=new Date(dateMilsec);
console.log(date2);


let date4=new Date();
console.log('date-> ',date4);


// const milisecDate=date.now()
// console.log(milisecDate);
let date3=new Date('1991-08-15');
console.log(date3);

let date5=new Date(2023,11,30,5,6);
console.log(date5)


let date6=new Date()
console.log(date6.getDate(),'day==>starting frm mon:',date6.getDay(),date6.getMilliseconds())
