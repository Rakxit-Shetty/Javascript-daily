//1351. Count Negative Numbers in a Sorted Matrix

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let i=0;
   grid.forEach((ele)=>ele.forEach((elem)=>elem<0? i++:"")) 
   return i;
};

//2529. Maximum Count of Positive Integer and Negative Integer
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let pos=0,neg=0;
     nums.forEach((ele)=>{
         if(ele>0) pos++
         if(ele<0) neg++
         }
         )
     return pos>neg ? pos: neg;
 };