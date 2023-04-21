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