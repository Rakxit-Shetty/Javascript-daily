//412 fizzBuzz
/*
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let res=[];
for(i=1;i<=n;i++){
    if(i%3===0 && i%5===0){
        res.push("FizzBuzz");
    }
    else if(i%3===0){
         res.push("Fizz");
    }
    else if(i%5===0){
         res.push("Buzz");
    }else{
         res.push((i).toString());
    }
}
return res;
};
//////////////////////
//485. Max Consecutive Ones
/*
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    return Math.max(...nums.join("").split("0").map((ele)=>ele.length)); 
};
///////////////////////////////////
//69. Sqrt(x)
/*
 * @param {number} x
* @return {number}
*/
var mySqrt = function(x) {
   return Math.floor(Math.sqrt(x));
};
///////////////////////////
//231. Power of Two
/*
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n==1 ||n==2) return true;
  if(n===0 || -16===n || -8===n || -4===n || -2===n || -1 ===n || -2147483648===n) return false;
  let n1=Math.abs(n);
  
  for(let i=0;i<n1;i++){


    if( Math.pow(2,i)===n1) {
       return true
    }else if(Math.pow(2,i)>n1){
         return false;
    }
 }
};
////////////////////////
//344. Reverse String
/*
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    return s.reverse();
};
////////////////
//242. Valid Anagram
/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length) return false;
      let list1={};
 let =list2={};
 
 for(let i=0;i<s.length;i++){
     list1[s[i]]=(list1[s[i]]||0)+1;
      list2[t[i]]=(list2[t[i]]||0)+1;
 }
 
 for(key in list1){
     if(list1[key]!==list2[key])
     return false;
 }
 return true;  
 };

 /////////////////////////
 //169. Majority Element
 /*
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let list={};
  nums.forEach((ele)=>list[ele]=(list[ele]||0)+1);
  //return list;
  let max=0;
  let fin=0;
   for(keys in list){
     if( list[keys]>max){
         max = list[keys];
         fin=keys;
     }
   }
   return fin;
};

//////////////////////
//2404. Most Frequent Even Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let list={};
  nums.forEach((ele)=>{
      if(ele%2===0)
      list[ele]=(list[ele]||0)+1
      
  });
  //return list;
  let max=-1;
  let fin=0;
   for(keys in list){
     if( list[keys]>max){
         max = list[keys];
         fin=keys;
     }
   }
   return max===-1 ? -1: fin;
};
//////////////////
//2620. Counter
/*
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    var n1=n;
    return function() {
        return n1++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */


/////////////////////////////////
//1281. Subtract the Product and Sum of Digits of an Integer
/*
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let prod=n.toString().split("").reduce((acu,cur)=>Number(acu)*Number(cur),1);
let sum=n.toString().split("").reduce((acu,cur)=>Number(acu)+Number(cur),Number(0));
return prod-sum;
};


/////////////////
//1844. Replace All Digits with Characters
/*
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
       
    let str=s.split("");
    
    for(let i=0;i<str.length;i++){
        if(i%2!=0){
            str[i]=String.fromCharCode(Number(str[i-1].charCodeAt())+Number(str[i]));
        }
    }
      
      return str.join("");
  };