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

//41. First Missing Positive

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    
   
    let list={}
    nums.forEach((ele)=>list[ele]=(list[ele]||0)+1);
    let idx=1;
    
    for(key in list){
        if(Number(key)>0){
       
        if(Number(key)==idx){
            idx++
        }else{
            return Number(idx)
        }     
        }
    }
    
    return idx;
};

//448. Find All Numbers Disappeared in an Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let list={}, res=[];
     nums.forEach((ele)=>list[ele]=(list[ele]||0)+1)
      for(let i=1; i<=nums.length;i++){
     list[i.toString()] ||res.push(i)
         
     }
     
     return res;
 };