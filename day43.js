//1502. Can Make Arithmetic Progression From Sequence

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    let arr1=arr.sort((a,b)=>a-b)
    let dif=Math.abs(arr1[1]-arr1[0]);

let fir=0;

for(let i=1;i<arr1.length;i++){
if(Math.abs(arr1[fir]-arr1[i])!==dif){
return false;
}
fir++;
}
return true
};