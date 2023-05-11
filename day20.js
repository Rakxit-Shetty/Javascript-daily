//414. Third Maximum Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if (nums.length===1)return nums[0]
    let list={}
    nums.map((ele)=>list[ele]=list[ele]||0);
   if(Object.keys(list).length<3) 
   return Object.keys(list).sort((a,b)=>a-b)[Object.keys(list).length-1] 
  return Object.keys(list).sort((a,b)=>a-b)[Object.keys(list).length-3] 
};