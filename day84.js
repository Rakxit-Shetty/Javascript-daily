//643. Maximum Average Subarray I

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if (nums.length==1)return nums[0];
    let avg1=0,sum1=0;
    for(let i=0;i<k;i++)
     sum1+=nums[i];
    
    avg1=sum1/k;
 
    for(let i=k;i<nums.length;i++){
       sum1-=nums[i-k];
       sum1+=nums[i];
       if(avg1<sum1/k) avg1=sum1/k;
    }
    return avg1;
 };