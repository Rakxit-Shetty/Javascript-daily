
//1. Two Sum

var twoSum = (nums, target)=> {
    
    var list={};
  
for(let i=0;i<nums.length;i++){
    if(list[target-nums[i]]>0){
        return([list[target-nums[i]],i]);
    }
    else{
        list[nums[i]]=i;
    }
}
  //  return(ok);
};

let num=[1,2,4,1,5,6,5];
let target=10;

console.log(twoSum(num,target));