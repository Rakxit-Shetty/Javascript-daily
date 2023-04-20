////////////////////////////////
//1768. Merge Strings Alternately
/*
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var mergeAlternately = function(a, b) {
    let c=[];
let n = a.length > b.length ? a.length : b.length;

for(i=0;i<n;i++){

   c.push(a[i]);
   c.push(b[i]);
 
}

return(c.join(""))
};