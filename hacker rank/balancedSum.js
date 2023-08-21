let arr=[1 ,2 ,3 ,3];

function balancedSum(arr,n){

    for(let i=0;i<arr.length;i++){
      
           let leftsum=arr.slice(0,i).reduce((a,b)=>{
            return a+b},0);
           let rightsum=arr.slice(i+1,arr.length).reduce((a,b)=>{
            return a+b},0);
            if(leftsum===rightsum){
                return true;
            }
        


    }
    return false;
}
console.log(balancedSum(arr,3))