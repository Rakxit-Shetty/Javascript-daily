
console.log("LEETCODE")
//1. Two Sum

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var list={};
 
for(let i=0;i<nums.length;i++){
   if(list[target-nums[i]]>=0){
       return([list[target-nums[i]],i]);
   }
   else{
       list[nums[i]]=i;
   }
}
};
//////////////////////////////////////////////////////////////////
//9. palindrome

/*
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const see= x.toString().split("").reverse().join("") === x.toString() ? true: false;
    return see;
};

/////////////////////////////////////////////
//136. Single Number

/*
 * @param {number[]} numbs
 * @return {number}
 */
var singleNumber = function(numbs) {
    list={}
    numbs.map((ele)=>list[ele]=(list[ele] || 0)+1);
    for(key in list){
        if(list[key]==1){
            return Number(key)
        }
    }
    console.log();
};
//////////////////////////
