//1876. Substrings of Size Three with Distinct Characters


/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let k=3, count=0;
     for(let i=0;i<s.length;i++){
         let thr=[]
         for(let j=i;j<k;j++)
         if(s[j]) thr.push(s[j]);
         k++;
         if([...new Set(thr)].length===3) count++;
     }
     return count;
 };