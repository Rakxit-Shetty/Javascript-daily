//1859. Sorting the Sentence

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let res=s.split(" ");
    let newStr=[];
    res.map((ele)=>{
        newStr[ele[ele.length-1]]=ele.slice(0,-1)
    })
    newStr.shift()
    return newStr.join(" ");
};