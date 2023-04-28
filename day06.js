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

//////////////////////////////////////
//2574. Left and Right Sum Differences
/*
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    let left=[];
     let righttemp=[];
      let right=[];
      let res=[];
     for(let i=0;i<nums.length;i++){
     
        left.push(left[i-1]+nums[i-1] || 0);
        righttemp.push(nums[nums.length-i-1]|| 0);
        right.push(right[i-1]+righttemp[i-1]||0);
     
     }
     right=right.reverse();
     res=right.map((ele,i)=>Math.abs(ele-left[i]))
     return res;
};

///////////////////////////////////////
