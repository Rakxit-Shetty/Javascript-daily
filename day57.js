//929. Unique Email Addresses

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let res=[];
    emails.forEach((ele)=>{
        let str=ele.split("@");
    let val=str[0].split("+")[0].split("").filter((ele)=>ele!=".").join("");
    console.log(val+"@"+str[1]);
    res.push(val+"@"+str[1])
    });

    return [...new Set(res)].length
};