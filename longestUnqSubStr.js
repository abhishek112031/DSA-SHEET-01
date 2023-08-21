var lengthOfLongestSubstring = function(s) {

    if(!s.length){
        return 0
    }
    let start=0;
    let end=0;
    let max=0;



    let unique=new Set();

    while(end<s.length){
        if(!unique.has(s[end])){
            unique.add(s[end]);
            max=Math.max(max,unique.size)
            end++;
        }
        else{
            unique.delete(s[start]);
            start++
        }
    }
    return max;
    
};
console.log(lengthOfLongestSubstring('geeksforgeeks'))