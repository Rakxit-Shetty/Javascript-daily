// 389. Find the Difference

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    list1={};
    list2={};
  let res=[];
     [...s].map((ele)=>list1[ele]=(list1[ele] || 0)+1);
      [...t].map((ele)=>list2[ele]=(list2[ele] || 0)+1);
      
     for(key in list2){
         if(list1[key]!=list2[key]){
            res.push(key); 
         }
     }
     return res.join("");
};