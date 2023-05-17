//1614. Maximum Nesting Depth of the Parentheses

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let max=0;
   let stack=[];
    [...s].forEach((ele)=>{
if(ele==="("){
stack.push(ele);
}
 if(ele===")"){
    stack.pop();
}
    if(stack.length>max){
    max=stack.length;
    }
  
    })
    return max;
};