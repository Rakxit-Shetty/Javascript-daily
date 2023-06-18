//2586. Count the Number of Vowel Strings in Range

/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let res=0;
    
    const isvowel=(s)=>{
        if(s=="a" || s=="e" || s=="i" || s=="o" || s=="u") return true;
        return false;
    }
    
     words.forEach((ele,i)=>{
         if(i>=left && i<=right){
 if(isvowel(ele.split("")[0]) && isvowel(ele.split("")[ele.length-1])) res++;}
       })
       
 return res;
 };