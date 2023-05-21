//1389. Create Target Array in the Given Order
/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    return index.reduce((acc, cur, idx) => (acc.splice(cur, 0, nums[idx]), acc), [])
 
 };
