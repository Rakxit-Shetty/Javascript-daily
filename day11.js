//1859. Sorting the Sentence

/*
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let res=s.split(" ");
    let newStr=[];
    res.map((ele)=>{
        newStr[ele[ele.length-1]]=ele.slice(0,-1)
    })
    newStr.shift()
    return newStr.join(" ");
};
//////////////////////////////////////
//238. Product of Array Except Self
/*
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res=[];
   
    nums.map((ele,i)=>{
         let prod=1;
        for(let j=0;j<nums.length;j++){
            if(j!==i){
                prod*=nums[j];
            }
        }
      
        res.push(prod);
       
        
    })
    return res;
};

////////////////////////////////////////////////////
//1822. Sign of the Product of an Array
/*
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
   let res=nums.reduce((acu,cur)=>acu*cur,1); 
  return  signFunc(res)
};

const signFunc=(x)=>{
if(x<0){
    return -1;
}
else if(x>0){
     return 1;
}
else{
    return 0;
}
}