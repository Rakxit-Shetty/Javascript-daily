//2351. First Letter to Appear Twice

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let map=new Map();
    
    for(let i=0;i<s.length;i++){
       if( map.has(s[i])) return s[i];
       map.set(s[i],s[i]);
        
    }
};

//1748. Sum of Unique Elements

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let list={}
    nums.forEach((ele)=>list[ele]=(list[ele]||0)+1);
    let sum=0;
    for (key in list){
        if(list[key]==1)
        sum+=Number(key)
    }
    return sum;
};