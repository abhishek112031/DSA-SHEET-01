let ar1 = [1, 5, 10, 20, 40, 80]; 
let ar2 = [6, 7, 20, 80, 100]; 
let ar3 = [3, 4, 15, 20, 30, 70, 80, 120];
// Output: 20, 80


// function commonElem(arr1,arr2,arr3){
//     let i=0,j=0,k=0;
//     let res=[];

//     while(i<arr1.length && j<arr2.length && k<arr3.length){
//         if(arr1[i]===arr2[j] && arr2[j]===arr3[k]){
//             res.push(arr1[i]);
//             i++;
//             j++;
//             k++;

//         }
//         else if(arr1[i]<arr2[j]){
//             i++;
//         }
//         else if(arr2[j]<arr3[k]){
//             j++;
//         }
//         else{
//             k++;
//         }
//     }

//     return res;
// }

// console.log(commonElem(ar1,ar2,ar3))


//practice:
const findCommonElements=(ar1,ar2,ar3)=>{
    
    let i=0,j=0,k=0;
    let res=[];

    while(i<ar1.length && j<ar2.length && k<ar3.length){
        if(ar1[i]===ar2[j] && ar2[j]==ar3[k]){
            res.push(ar1[i]);
            i++;
            j++;
            k++;

        }
        else if(ar1[i]<ar2[j]){
            i++;
        }
        else if(ar2[j]<ar3[k]){
            j++;
        }
        else{
            k++;
        }
    }
    return res;


}
console.log(findCommonElements(ar1,ar2,ar3))