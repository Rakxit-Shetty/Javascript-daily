//704. Binary Search
/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let end=nums.length-1;
      let start=0;
      while(start<=end){
       
          let mid=Math.floor(((start+end)/2));
          console.log(mid,nums[mid]);
          if(target===nums[mid]) return mid;
          else if(target>nums[mid]) start=mid+1;
          else end=mid-1;
      }
      return -1;   
  };
   /////
   //