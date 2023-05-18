//1480. Running Sum of 1d Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let res=[];
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum=0;
for(let j=0;j<=i;j++){
    sum+=nums[j];
}
res.push(sum);
    }
    return res;
};