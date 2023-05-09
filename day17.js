//1572. Matrix Diagonal Sum
/*
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let a=mat;
    let temp=0
for(let i=0;i<a.length;i++){
    
    for(let j=0;j<a.length;j++){
        if(j==i){
            console.log(a[i][j])
            temp+=a[i][j];
        }
       if(j==(a.length-1)-i && j!=i){
           console.log(a[i][j])
            temp+=a[i][j];
       } 
       
    }
}
return temp;
};
///////////////////////////
//2635. Apply Transform Over Each Element in Array
/*
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    return arr.map((ele,i)=>fn(ele,i)) 
  };
  ////////////////////////
  //2634. Filter Elements from Array
  /*
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    return arr.filter((ele,i)=>fn(ele,i))
};
//////////////////////////////
///2626. Array Reduce Transformation
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    return nums.reduce((acu,cur)=>fn(acu,cur),init)
 };
 //////////////
 //268. Missing Number
 /*
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let srt=nums.sort((a,b)=>a-b);
    for(let i=0;i<=nums.length;i++){
        if(i!==srt[i])
        return i;
    }
 };
 ////////////////
 //