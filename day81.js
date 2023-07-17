/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let x=num.toString().split(""), count=0;
       for(let i=0;i<x.length;i++){
           let sum="";
           for(let j=i;j<k;j++)
           sum+=x[j]||0;
           k++;
           if(sum!=0)
               num%Number(sum)==0 ? count++:""
       }
       return count;
   };