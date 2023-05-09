//258. Add Digits
/*
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num.toString().split("").length===1) return num;
    let fin=[];
    let res=num.toString().split("").map((ele)=>Number(ele));
   // console.log(res.reduce((acu,cur)=>acu+cur,0))
    while(res.length!==1){
       let temp=res.reduce((acu,cur)=>acu+Number(cur),0);
       res=temp.toString().split("");
     // console.log(res);
      fin=res;
    }
     return fin[0];
};