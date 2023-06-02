//26. Remove Duplicates from Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len=nums.length;
    let k= [...new Set(nums)].length;
    let arr=[...new Set(nums)]
   nums.splice(0,nums.length);
   nums.length=len;
   for(i=0;i<len;i++){
     //  console.log(i,k)
       if(i<k){
       nums.splice(i,i,arr[i]);
       }else{
       nums.splice(i,i,"_")
       }
   }
   //nums.push([...new Set(nums)])
return k;
};