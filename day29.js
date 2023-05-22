//347. Top K Frequent Elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
       
    let list = {} 
 nums.map((ele)=>list[ele]=(list[ele]||0)+1)
 
 // Convert the object into an array of key-value pairs
 let entries = Object.entries(list);
 
 return entries.sort((a, b) => b[1] - a[1]).map((ele)=>ele[0]).slice(0,k)
 
 
 };