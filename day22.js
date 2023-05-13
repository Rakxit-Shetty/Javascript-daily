//1816. Truncate Sentence

/*
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    if(s.split(" ").length <= k) return s;
     return s.split(" ").slice(0,k).join(" ")
 };
