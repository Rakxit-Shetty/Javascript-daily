//1464. Maximum Product of Two Elements in an Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    return (Number(nums.sort((a,b)=>b-a)[0])-1)*((Number(nums.sort((a,b)=>b-a)[1])-1))
 };