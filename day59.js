//2722. Join Two Arrays by ID

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let list={};
    [...arr1,...arr2].forEach((ele)=>list[ele.id]={...list[ele.id],...ele})
        return [...Object.values(list)];
    };

    //2727. Is Object Empty
/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return JSON.stringify(obj).length==2 ? true: false;  
  };