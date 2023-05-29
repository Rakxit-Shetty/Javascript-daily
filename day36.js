//2496. Maximum Value of a String in an Array
/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    return Math.max(...strs.map((ele)=>!isNaN(Number(ele)) ? parseInt(ele) : ele.length ));
};