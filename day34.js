//557. Reverse Words in a String III
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(" ").map((ele)=>ele.split("").reverse().join("")).join(" ")
};

//2643. Row With Maximum Ones
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let max=0,ind=0;
    let  get =mat.map((ele)=>ele.filter((only1)=>only1==1));
   get.forEach((ele,i)=>{
       if(ele.length>max){
       max=ele.length;
       ind=i;
       }
       
   })
    return [ind,max];
};