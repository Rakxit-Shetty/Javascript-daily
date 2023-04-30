//BLIND 75

//217. Contains Duplicate
/*
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map={};
    nums.map((ele)=>{
        map[ele]=(map[ele] ||0)+1;

    });
    console.log(map);
    for(keys in map){
        if(map[keys]!=1){
          //  console.log("dub",map[keys])
            return true;
        }
       
    }
    return false;
};
////////////////////////////////

//121. Best Time to Buy and Sell Stock
/*
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min=prices[0];
    let prof=0;
    for(let i=1;i<prices.length;i++){
        //console.log(i)
        if(min>prices[i]){
            min=prices[i];
        }
        if(prices[i]-min>prof){
            prof=prices[i]-min;
        }
    }
    
    return prof;return max-min;
     
    };


/////////////////////
// HACKER RANK
//Funny String

function funnyString(s) {
    let rev=[];
    let samp=[];
    
    for(let i=0;i<s.length;i++){
        rev.push(s.charCodeAt(s.length-i-1));
        samp.push(s.charCodeAt(i));
       
    }

for(let i=0;i<rev.length-1;i++){
    if(Math.abs(rev[i]-rev[i+1])!==Math.abs(samp[i]-samp[i+1])){
        return "Not Funny";
    }
   
}

return "Funny"

}

console.log("",funnyString("bcxz"));

//////////////////////////////////////
//minimumDistances
function minimumDistances(a) {
    let min=Number.MAX_VALUE;
  for(let i=0;i<a.length;i++){
     
      for(let j=i+1;j<a.length;j++){
          if(a[i]==a[j]){
              console.log(i,j);
              if(min>j-i){
                  min=j-i;
              }
          }
      }
  }
  return min===Number.MAX_VALUE ? -1: min;

}
console.log("",minimumDistances([7, 1, 3, 4, 1, 7]));