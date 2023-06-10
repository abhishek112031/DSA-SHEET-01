let arr=['vaibhav','almanac','is','fat','button','aabaca'];

function sortArrByCountOfA(arr){

    function countof_a(str){
        let count=0;
        for(let i of str ){
            if(i=='a'){
                count=count+1;
            }
        }
        return count;
    }
    // console.log(countof_a('cc'));
    
    arr.sort((x,y)=>{
       
        if(countof_a(y)==countof_a(x)){
            return y.length-x.length;
        }
        else{
    
            return countof_a(y)-countof_a(x);
        }
    
    })

    return arr;
}

console.log(sortArrByCountOfA(arr));