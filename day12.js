//2215. Find the Difference of Two Arrays
/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let final=[]
   let res1=[... new Set(nums1)].filter(ele1=>{
    return !nums2.some((ele2)=>ele1==ele2)
 });
 final.push(res1);
 let res2=[... new Set(nums2)].filter(ele1=>{
    return !nums1.some((ele2)=>ele1==ele2)
 });
  final.push(res2);
 
 return final;
};
/////////////////////////////////////////////////
//2016. Maximum Difference Between Increasing Elements
/*
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
      let min=nums[0];
   let max=0;
    for(let i=1;i<nums.length;i++){
          
        if(min>nums[i]){
            min=nums[i];
        }
        
       if(max<nums[i]-min){
           max=nums[i]-min;
       }
    }
    if(max===0)
    return -1;
    return max;
};

///////////////////////////////////
//283. Move Zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let size = nums.length;
    for (let i = 0; i < size; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            i--;
            size--;
        }
    }
   return nums;
};
/////////////////////////////////////////
//349. Intersection of Two Arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let big=[];
  let small=[];
  if(nums1.length>nums2.length){
      big=nums1;
      small=nums2;
  }else{
      big=nums2;
      small=nums1;
  }
    return [...new Set(big.filter((ele1)=> small.some((ele2)=>ele1==ele2)))];
};

//////////////////////////////////////////////////
//1491. Average Salary Excluding the Minimum and Maximum Salary
/*
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let fin = salary.filter((ele)=>{
       if(Math.max(...salary)!==ele && Math.min(...salary)!==ele ){
       return ele
       }
     
   });
    return fin.reduce((acu,cur)=>acu+cur,0)/fin.length;
};

///////////////////////////////////////////////
//28. Find the Index of the First Occurrence in a String
/*
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack.length<needle.length){
        return -1;
    }
    let len=needle.length
    for(let i=0;i<=haystack.length-needle.length;i++){
        //console.log(haystack.substring(i,len))
        if(haystack.substring(i,len)===needle){
            return i;
        }
        len++;
        if( haystack.length-needle.length===i  ){
       return -1;
   }
    }  
};