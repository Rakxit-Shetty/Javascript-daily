/////////////////////////////////////////
//1512. Number of Good Pairs
//Solution Time complexity O(n^2) Space complexity O(1)
/*
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let res=0;
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++)
        {
            if(nums[i]===nums[j]){
                console.log("(",i,",",j,")")
            res++;
            }
        }
    }
     //console.log(list)
     return res;
 };

 //Solution Time complexity O(n) Space complexity O(n)
 /*
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const map = {}
     let count = 0
     
     nums.map((number)=>{
         if (map[number]) {
             console.log(map[number])
              count += map[number];
             map[number] += 1;
            
         } else {
             map[number] = 1;
         }
     });
      return count
    
    };