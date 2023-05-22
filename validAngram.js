var isAnagram = function(s, t) {

    let s1=s.split('').sort();
    let t1=t.split('').sort();


    for(let i=0;i<s1.length;i++){
        if(s1.length==t1.length){

        if(s1[i]!==t1[i]){
            return false;
        }

        }
        else{
            return false;
        }
    }
    return true;


    
};