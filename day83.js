//561. Array Partition


/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    return nums.sort((a,b)=>a-b).filter((e,i)=>i%2==0).reduce((ac,cu)=>ac+cu,0);
};