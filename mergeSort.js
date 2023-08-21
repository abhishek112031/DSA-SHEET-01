const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;

var merge = function(nums1,m, nums2, n) {

    let nums=[];
    for (let i=0;i<m;i++){
        nums.push(nums1[i]);
    }
    nums=[...nums,...nums2];
    nums.sort((a,b)=>{
       return  a-b;
    });

    nums1=nums;
    return nums1
    
};
console.log(merge(nums1,m,nums2,n))