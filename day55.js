// 1207. Unique Number of Occurrences

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let list={};
    arr.forEach((ele)=>list[ele]=(list[ele]||0)+1);

   return Object.keys(list).length==[...new Set(Object.values(list))].length
};