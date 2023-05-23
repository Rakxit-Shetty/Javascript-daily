//2535. Difference Between Element Sum and Digit Sum of an Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum=nums.reduce((acu,cur)=>acu+cur,0);
  let mul=nums.toString().split("").filter((ele)=>ele!=",").reduce((acu,cur)=>Number(acu)+Number(cur),0);
  return Math.abs(Number(sum)-Number(mul));
};