//804. Unique Morse Code Words

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let code=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
 let list={};
 for(let i=0;i<code.length;i++){
    list[i+97]=code[i]; 
 }
 
  let morse=words.map((ele)=>{
      let fill="";
  for(let i=0;i<ele.length;i++){
     fill+= list[ele.charCodeAt(i)]
      
  }
  return fill
  })
 
  return [...new Set(morse)].length; 
 };