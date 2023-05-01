//2325. Decode the Message
/*
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let list={};
  let newKey=[...new Set (key.split("").filter((ele)=>ele!=" "))].map((ele,index)=>list[ele]=index+97); ;
let ans=[];

for(let i=0;i<message.length;i++){
    message[i]===" " ? ans.push(" ") :  
    ans.push(String.fromCharCode(list[message[i]]))
    
      //|| "");
}
     return ans.join("");
};
/////////////////////////////////
//1431. Kids With the Greatest Number of Candies

/*
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let res= candies.map((ele)=>{
             let tot=ele+extraCandies;
             return candies.every((candy)=>tot>=candy);
         });
         return res;      
};
////////////////////////////////
//1365. How Many Numbers Are Smaller Than the Current Number
/*
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
     
    let res=[];
   
     
  nums.map((ele,i)=>{
      let count=0;
     for(let j=0;j<nums.length;j++){
         if(nums[j]!=ele && nums[j]<ele)
             count++;
     }
      
     res.push(count)
      
  });

    return res;
 

};

//////////////////
//338. Counting Bits
/*
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let res=[];
   for(let i=0;i<=n;i++){
    res.push((i).toString(2).split("").filter((ele)=>ele!=0).length);
}
return (res); 
};