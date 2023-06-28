//49. Group Anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
   
    let unq=[...new Set(strs.map((ele)=>ele.split("").sort().join("")))];
 
 let res=[];
 
 unq.forEach((ele)=>{
     let res1=[];
     strs.forEach((elem)=>
     ele==[...elem].sort().join("") ? res1.push(elem) :"")
     res.push(res1);
 })
 
 return res.sort((a,b)=>a.length-b.length)
        
 };

 //optimze


const groupAnagrams = function(strs) {
  const map = new Map();

  for (let str of strs) {
    const sortedStr = [...str].sort().join("");
    if (map.has(sortedStr)) {
      map.get(sortedStr).push(str);
    } else {
      map.set(sortedStr, [str]);
    }
  }

  const result = [];
  for (let arr of map.values()) {
    result.push(arr);
  }

  return result.sort((a, b) => a.length - b.length);
};
