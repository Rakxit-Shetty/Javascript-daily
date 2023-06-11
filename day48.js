//2085. Count Common Words With One Occurrence


/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {

    let list={};
[...words1,...words2].forEach((ele)=>list[ele]=(list[ele]||0)+1);
let res=[]
for(const key in list){
   if(list[key]==2)
res.push(key)
}

return res.filter((ele)=>words1.includes(ele) && words2.includes(ele)).length

// let list1={},list2={};
//     words1.forEach((ele)=>list1[ele]=(list1[ele]||0)+1);
//     words2.forEach((ele)=>list2[ele]=(list2[ele]||0)+1);
  
//    words1.forEach((ele,i)=>{
//        let cnt=0;
//        if(words2.includes(ele))
//    })

};

//884. Uncommon Words from Two Sentences

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let list={};

    [...s1.split(" "),...s2.split(" ")].forEach((ele)=>list[ele]=(list[ele]||0)+1);
let res=[];

    for(const key in list){
    if(list[key]==1)
    res.push(key)
    
    }

return res
};