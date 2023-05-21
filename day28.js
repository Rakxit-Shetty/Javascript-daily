//1313. Decompress Run-Length Encoded List
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let res=[];
      let i=0;
     while(i<=nums.length){
        for(let j=0;j<nums[i];j++){
          res.push(nums[i+1])
          
       }
         i+=2;
     }
 
     return res;
 };