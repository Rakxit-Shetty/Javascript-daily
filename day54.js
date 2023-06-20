//1732. Find the Highest Altitude

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {

    let res=[];
    let fin=gain.reduce((acu,cur)=>{
      res.push(acu)
      return acu+=cur},0);
      res.push(fin)
      return Math.max(...res);
   
   };

