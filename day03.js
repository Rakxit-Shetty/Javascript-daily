//14. Longest Common Prefix
/*
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort();
    let s1=strs[0];
    let s2=strs[strs.length-1];
    let ind=0;
    for(let i=0;i<s1.length;i++){
        if(s1.charAt(i)===s2.charAt(i)){
            ind++;
        }
        else{
            break;
        }
    }
return s1.substring(0,ind);
};

////////////////////////////////////////////
//20. Valid Parentheses
/*
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let pairs={"(":")","[":"]","{":"}"}
      let a=[];
      let b=[];
      
      const s1=s.split("");
      for(let i=0;i<=s1.length;i++){
      a.push(s1.shift());
      b.push(s1.shift());
      //const a1 =a.join("").charCodeAt(i)
      //a[i]==pairs[a[i]];
      if(a.length!=b.length){
          return false;
      }
    //console.log(pairs[a[i]],b[i]);
    if(pairs[a[i]]!==b[i]){
        return false;
    }
    else{
       return true
    }
  //console.log(b[i]);
    
        
      
      }  
  };

  //gpt solution
  function isValid(s) {
  const stack = [];
  const openingBrackets = ["(", "[", "{"];
  const closingBrackets = [")", "]", "}"];

  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];

    if (openingBrackets.includes(bracket)) {
      stack.push(bracket);
    } else if (closingBrackets.includes(bracket)) {
      const lastOpening = stack.pop();
      if (
        openingBrackets.indexOf(lastOpening) !== closingBrackets.indexOf(bracket)
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
};