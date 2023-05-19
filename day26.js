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