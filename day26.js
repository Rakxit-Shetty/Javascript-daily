//1672. Richest Customer Wealth
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let res=accounts.map((ele)=>
        ele.reduce((acu,cur)=>acu+cur,0)
    )
    return Math.max(...res)
};

//1021. Remove Outermost Parentheses
/**
 * @param {string} s
 * @return {string}
 */ 
var removeOuterParentheses = function(s) {
    let count=0,outer="";
    let res= [...s].filter((ele)=>{
         if(ele=="(")
         count++;  
         
         if(count>1)
         outer+=ele;
         
         if(ele==")")
         count--;
    })
    return outer ;
 };