// //S = aabb
// Output:  ab 
// Explanation: 'a' at 2nd position is
// appearing 2nd time consecutively.
// Similiar explanation for b at
// 4th position.


function removeConsecutiveChar(s){
    let res=[];
    for(let i of s){
        if(!res.length || res[res.length-1]!==i){
            res.push(i)
        }

    }
    return res.join('')
}
console.log(removeConsecutiveChar('aabbabbbc'))