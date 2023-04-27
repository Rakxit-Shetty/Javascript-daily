//1470. Shuffle the Array
/*
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let temp=[];
    for(let i=0;i<n;i++){
temp.push(nums[i]);
temp.push(nums[i+n]);
    }
    return temp;
};