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
