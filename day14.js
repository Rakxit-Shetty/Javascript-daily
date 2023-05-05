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

///////////////////////////////////////
//67. Add Binary
/*
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
 };