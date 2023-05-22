
function inPair(op,cl){
    if((op=='(' && cl==')')||(op=='{' && cl=='}')||(op=='[' && cl==']')){
        return true;

    }
    else{
        return false;
    }
}

function isValidParenths(s){
    let stack=[];

    for(let i of s){
        if(i=='(' || i=='{' || i=='['){
            stack.push(i);
        }
        else if(i==')' || i=='}' || i==']'){
            if(stack.length && inPair( stack[stack.length-1],i)){
                stack.pop();
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }

    if(stack.length){
        return false;
    }
    else{
        return true;
    }
}

console.log(isValidParenths('{}{}[)]'))