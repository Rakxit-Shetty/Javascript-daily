//1456. max no of ovel in a substring
//Time exceeded
/*
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let max=0;
  let res=[];
  let sublen=k;
   for(let i=0;i<s.length;i++){
       if(s.substring(i,k).length===sublen){
           res.push(s.substring(i,k).split("").filter((ele)=>ele=='a' || ele=='e' || ele=='i' || ele=='o' ||ele=='u' ).length);
       }
 k++;
 }  
  return Math.max(...res);
};
////////////////////////////////////////////////
//66. Plus One
/*
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    return ((BigInt(digits.join(""))+BigInt(1)).toString().split(""))
  };