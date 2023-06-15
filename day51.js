//2283. Check if Number Has Equal Digit Count and Digit Value

/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
      
    let list={},list1={};
    
    num.split("").forEach((ele,i)=>{
        list1[ele]=(list1[ele]||0)+1
        list[i]=ele
    });
    
    for(let key in list){
     
   if(list[key]!=(list1[key] ||0)) return false
                }

    return true;
};

//728. Self Dividing Numbers

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let res=[]
   for(let i=left;i<=right;i++){
       flg=true;
       i.toString().split("").forEach((ele)=>{
           if(i%Number(ele)!=0) flg=false })
           if(flg==true) res.push(i)
   }
   return res 
};
