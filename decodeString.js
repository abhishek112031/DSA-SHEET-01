// function decodeString(s) {
//     const stack = [];
//     for (const c of s) {
//         if (c !== ']') {
//             stack.push(c);
//             continue; //continue pushing into stack untill i==']';

//         }

//         let str = "";
//         let num = "";

//         while (stack[stack.length - 1] !== '[') {
//             str = stack.pop() + str;
//         }
//         stack.pop();
//         while (parseInt(stack[stack.length - 1])) {
//             num = stack.pop() + num;
//         }
//         const segment = str.repeat(Number(num));
//         stack.push(segment);
//     }
//     return stack.join("");
// }
// let s = "3[a2[c]]";
// console.log(decodeString(s));



let s='3[a2[c]]';
function decodeString(s){
  let res=[];
  
  for(let i of s){
    if(i!==']'){
      
    res.push(i);
    continue;
    }
  
  
  let str='';
  let num='';
  
  while(res.length && res[res.length-1]!=='['){
    
    str=res.pop()+str;
    
  }
  
  res.pop();
  
  while(Number(res[res.length-1])){
    
    num=res.pop()+num;
  }
  
  let segm=str.repeat(parseInt(num));
  res.push(segm);
  }
  return res.join('')
  
}

console.log(decodeString(s));