//125. Valid Palindrome
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let joint=[...s].filter((ele)=>ele.toLowerCase().charCodeAt()>=97 && ele.toLowerCase().charCodeAt()<=122 || Number(ele)>=0 || Number(ele)<=9).filter((ele)=>ele!=" ");
       
       for(let i=0;i<Math.floor(joint.length/2);i++){
         if( joint[i].toLowerCase()!==joint[joint.length-i-1].toLowerCase())
             return false;
       }
       return true;
   };

   //2677. Chunk Array

   /**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let res=[],array=[];
    count=0;
    
    arr.forEach((ele)=>{
        array.push(ele);
     count++;
      
      if(count===size){
      res.push(array);
      array=[];
      count=0;
      }
    
    }
    );
    
    if(array.length!=0)
    res.push(array)
    return res
    };

//2625. Flatten Deeply Nested Array

    /*
 * @param {any[]} arr
    * @param {number} depth
    * @return {any[]}
    */
   var flat = function (arr, n) {
    return arr.flat(n)   
   };

   //2678. Number of Senior Citizens

   /**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    return details.filter((ele)=>Number(ele[11]+ele[12])>60).length
 };