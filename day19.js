//2651. Calculate Delayed Arrival Time
/*
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    if(arrivalTime+delayedTime<24) return arrivalTime+delayedTime;
   return arrivalTime+delayedTime-24
};

/////////////////////////////////////
//2652. Sum Multiples
/*
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let sum=0;
    for(let i=0;i<=n;i++){
        if(i%3==0 || i%5==0 || i%7==0){
            sum+=i;
        }
    }
    return sum; 
};
//////////////////////////
//1832. Check if the Sentence Is Pangram
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    if (sentence.length<26)return false;
     let list={};
     sentence.split("").map((ele)=>list[ele]=(list[ele] || 0)+1)
      if(Object.keys(list).length>=26) return true;
      return false; 
 };
