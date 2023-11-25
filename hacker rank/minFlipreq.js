
function calculateminFlip(str){

    // function flip(ch){
    //     if(ch==='0'){
    //         return '1';
    
    //     }
    //     else{
    //         return '0';
    //     }
    // }

//short hand of above function:
    function flip(ch){
       return (ch==='1')? '0':'1';
    }
    
    
    function minFlipReq(str,expected){
    
        let noofflips=0;
    
    
        for(let i in str){
            if(i!==expected){
                noofflips++;
                
            }
            expected=flip(expected);
        }
        return  noofflips;
    }
    return Math.min(minFlipReq(str,'0'),minFlipReq(str,'1'))
}
console.log(calculateminFlip('001'));

