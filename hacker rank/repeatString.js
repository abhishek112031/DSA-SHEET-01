let s='abc';
let n=10;
// let reqStr='';
// let i=0;

// while(reqStr.length<n){
//     reqStr+=s[i];
//     if(i===s.length-1){
//         i=-1;

//     }
//     i++;
  
    
// }

// let map=new Map();
// for (let i of reqStr){
//     map.set(i,map.has(i)?map.get(i)+1:1);
// }
// console.log( map.get('a'));


//method:2
let repeatingCount=Math.floor(n/s.length);
let remaining=n%s.length;
let resStr=s.repeat(repeatingCount);
for(let i=0;i<remaining;i++){
    resStr+=s[i]
}
let map=new Map();
for (let i of resStr){
    map.set(i,map.has(i)?map.get(i)+1:1);
}
console.log( map.get('a'));
console.log(resStr)