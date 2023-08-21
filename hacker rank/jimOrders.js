let orders=[[8,1],[4,2],[5,6],[3,1],[4,3]];

// function jimOrders(orders) {
    // Write your code here
    let res=[];
    let delivaryTime=[];
    for(let i of orders){
        delivaryTime.push(i[0]+i[1]);
    };
    // let map=new Map();
    let obj={}
    for(let i=0;i<delivaryTime.length;i++){
        // map.set(i,delivaryTime[i]);
        obj[i]=delivaryTime[i];
        
    }
    
    let keyvalarr=Object.entries(obj);
    //   console.log(keyvalarr)
    keyvalarr.sort((a,b)=>{
        if(a[1]==b[1]){
            return a[0]-b[0]
            
        }
        else{
            return a[1]-b[1]
        }
    })
    for(let i of keyvalarr){
        res.push(Number(i[0])+1);
    }
return res;
    

// }