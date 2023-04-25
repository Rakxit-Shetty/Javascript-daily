// 1108. Defanging an IP Address
/*
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    const a=address.split(".");
    return a.join("[.]");
};
//////////////////////////////////////

// 2011. Final Value of Variable After Performing Operations
/*
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
   let a=0;
   operations.map(ele=>{
     //  console.log(typeof(ele.split("")[1]));
      ele.split("")[1] ==="+" ? a++ :a--;
   })
    return a; 
};

/////////////////////////////////////////
//771. Jewels and Stones
/*
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
   const a=stones.split("").filter((ele)=>jewels.includes(ele));
    return a.length;  
};

//////////////////////////////////////
// 2114. Maximum Number of Words Found in Sentences
/*
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
   let a=[];
    sentences.map((ele)=>{
     a.push(  ele.split(" ").length);
      });
   console.log(a);
   return(Math.max(...a));
};

//////////////////////////////////////////////////
// 1678. Goal Parser Interpretation
/*
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    const indi=command.split("");
    const res=[];
    for(i=0;i<indi.length;i++){
        if(indi[i]=="G")
                res.push(indi[i]);
        else if(indi[i]=="(" && indi[i+1]==")")
         res.push("o");
         else if(indi[i]=="(" && indi[i+1]=="a")
         res.push("al");
    }
    return res.join("");
};



