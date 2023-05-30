//287. Find the Duplicate Number

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let list={}
    nums.forEach((ele)=>list[ele]=(list[ele]||0)+1);
    for(key in list){
        if(list[key]>1){
            return key
        }
    }
};