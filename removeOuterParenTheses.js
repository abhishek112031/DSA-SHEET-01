

let  S = "(()())(())(()(()))";

function removeOuterParenthesis(s){
    let count=0;
    let ans='';

    for(let i of s){
        if(i==='('){
            if(count){
                ans=ans+i;
            }
            count=count+1;
        }
        else{
            count=count-1;
            if(count){
                ans=ans+i;
            }
        }
    }
    return ans;
}
console.log(removeOuterParenthesis(S))