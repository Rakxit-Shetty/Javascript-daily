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

//345. Reverse Vowels of a String

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let ind=[];
    [...s].map((ele,i)=>{
    if(ele==="a" || ele==="e" ||ele==="i" || ele==="o" ||ele==="u" || ele==="A" || ele==="E" ||ele==="I" || ele==="O" ||ele==="U" ){
        ind.push([ele,i]);
    }
    })
    let indval=ind.map((ele)=>ele[1]).reverse()
    let indkey=ind.map((ele)=>ele[0])
let str=[...s];
indval.forEach((ele,i)=>{
str.splice(ele,1,indkey[i])
})
    
    return str.join("")
};