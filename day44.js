//2108. Find First Palindromic String in the Array


/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let res= words.filter((ele)=>ele.split("").reverse().join("")==ele);
    return res[0] || ""
};

//2390. Removing Stars From a String
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let res=[]
s.split("").forEach(ele=>ele=="*" ? res.pop():res.push(ele))
return res.join("")

};