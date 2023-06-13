//2278. Percentage of Letter in String
/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let oclen=(s.split("").filter((ele)=>ele===letter).length) 
    let len=s.length;
    return Math.floor((oclen/len)*100)
 };

 //451. Sort Characters By Frequency
 /**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map=new Map();
 s.split("").forEach((ele)=>map.set(ele,(map.get(ele)||0)+1));
 let srt=[...map.entries()].sort((a,b)=>a[1]-b[1]);
 
 let res=[];
 for(let i=0;i<srt.length;i++){
     // console.log(srt[i][1])
     for(let j=0;j<srt[i][1];j++){
         res.unshift(srt[i][0])
     }   
 }
 return res.join("")
 };

 //opti

 const charMap = s.split('').reduce((acc, cur) => {acc[cur] = (acc[cur] || 0) + 1; return acc} , {})
    
    const sortedArr = Object.keys(charMap).sort((a, b) => charMap[b] - charMap[a]);
    
    return sortedArr.reduce((acc, cur) => acc + cur.repeat(charMap[cur]) ,'');


    //387. First Unique Character in a String
    /**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hMap=new Map();
    s.split("").forEach((ele)=>hMap.set(ele,(hMap.get(ele)||0)+1));
    let ele;
    for(const key of hMap){
       
        if (key[1]==1) {
            ele=key[0];
             break;
             }
    }

    
    return s.split("").indexOf(ele);
};

//1880. Check if Word Equals Summation of Two Words

/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    var ret=(s)=>{
let res=[];
  s.split("").forEach((ele)=>res.push(ele.charCodeAt()-97));
  //  console.log(res)
  return res.reduce((acc,cur)=>acc+cur,"");
  }
  //console.log(Number(ret(firstWord))+Number(ret(secondWord)),ret(targetWord))
 return (Number(ret(firstWord))+Number(ret(secondWord))==ret(targetWord))

};