
// function subArrWith0sum(arr) {
//     let resSubArrSet = [];
//     for (let i = 0; i < arr.length; i++) {
//         let prefix = 0;//position matters
//         for (let j = i; j < arr.length; j++) {
//             prefix += arr[j];
//             if (prefix === 0) {
//                 resSubArrSet.push([i, j]);
//                 // prefix=0;
//             }
//         }
//     }
//     return resSubArrSet;
// }
let arr = [0, 6, 3, -1, -3, 4, -2, 2, 4, 6, -12, -7];
// console.log(subArrWith0sum(arr))



function subarrWith0Sum(arr){

    let res=[];

    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=i;j<arr.length;j++){

            sum+=arr[j];

            if(sum==0){
                res.push(arr.slice(i,j+1));
            }

        }
    }
    return res;

}
console.log(subarrWith0Sum(arr))