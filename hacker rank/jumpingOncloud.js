function jumpingOnClouds(c, k) {
    
    
    let energyLev=101;
    // let pointer=0;
    
    for(let i=0;i<c.length;i+=(i+k)%c.length){
        if(c[i]===0){
            energyLev=energyLev-1;
            break;
            
        }
        else{
            energyLev=energyLev-3;
            
        }
    }
    return energyLev;
    
    


}
let c=[0,0,1,0];
let k=2;
console.log(jumpingOnClouds(c,k))