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

//27. Remove Element

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let x=nums.length;
    while(nums.includes(val)){
     //   i++;
 nums.splice(nums.findIndex((ele)=>ele===val),1)
   }
   let k=nums.length
   for(let i=0;i<x;i++){
       if(k<i){
           nums.push("-")
       }
   }
   return k
 };