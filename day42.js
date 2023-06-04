//1295. Find Numbers with Even Number of Digits

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    return nums.filter((ele)=>Number(ele.toString().split("").length)%2==0).length
    };