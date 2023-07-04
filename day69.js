//137. Single Number II

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    list={};
    nums.forEach((ele)=>list[ele]=(list[ele]||0)+1);

    for(let key in list){
        if(list[key]<2){
            return key
        }
    }
};