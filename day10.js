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