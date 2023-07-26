//290. Word Pattern



/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    if(pattern.length!=s.split(" ").length) return false
    if([...new Set(pattern)].length!=[...new Set(s.split(" "))].length) return false;
    let list={};
    s.split(" ").map((ele,i)=>list[pattern[i]]=ele);
    for(let i=0;i<pattern.length;i++)
        if(s.split(" ")[i]!=list[pattern[i]]) return false;
    return true
   };