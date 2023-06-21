//1221. Split a String in Balanced Strings

/**
 * @param {string} s
 * @return {number}
 */

var balancedStringSplit = function(s) {
    let stack=[];
    let count=0;
    s.split("").forEach((ele)=>{
        console.log(stack)
        if(!stack[0]) stack.push(ele)
        else{
        if(stack[0]==ele){
            stack.push(ele);
        }else{
            stack.pop();
        }
        }
        if(stack.length==0) count++;
    })
    return count;
    };