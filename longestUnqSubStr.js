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



//other modifications:
const s='geeksforgeeks'
function longestUniqueSubstring(s){
    if(!s.length){
        return -1;
    }
    let substr;
    let maxlen=0,start=0,end=0;
    let set=new Set();

    while(end<s.length){
        if(!set.has(s[end])){
            set.add(s[end]);
            // maxlen=Math.max(maxlen,set.size);
            // substr=set;

            if(maxlen<set.size){
                maxlen=set.size;
                substr=[...set].join('');
            }
            end++;
        }
        else{
            set.delete(s[start]) ;
            start++;
        }
    }
    return [maxlen,substr]

}
console.log(longestUniqueSubstring(s))