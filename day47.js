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