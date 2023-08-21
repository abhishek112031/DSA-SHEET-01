// var isPalindrome = function(s) {
//     let str = ''
//    for(let i = 0; i < s.length; i++) {
//        if(s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90 || 
//          s[i].charCodeAt() >= 48 && s[i].charCodeAt() <= 57 || 
//          s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122){
//            str += s[i].toLowerCase()
//        }
//    }
//    // console.log(str)
//    return str == str.split('').reverse().join('')
   
   
// };

//other method:--->

function isPalindrome(s){
  let s2=s.replace(/[^a-z0-9]/gi,'');

  return s2.split('').reverse().join('')===s2;
}
// console.log(isPalindrome('ab ba'))