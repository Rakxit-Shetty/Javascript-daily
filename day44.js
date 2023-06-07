//2108. Find First Palindromic String in the Array


/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let res= words.filter((ele)=>ele.split("").reverse().join("")==ele);
    return res[0] || ""
};