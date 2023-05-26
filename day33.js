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