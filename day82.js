//


/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
 
    //Brute Force
        let arr=[],Ocount=0;   arr.length=k;
      if( blocks.includes(arr.fill("B").join(""))) return 0;
   
      let sum=blocks.split("").slice(0,k).map((e)=>{
          if(e=="W") Ocount++;
          return e;
      });
   
       for(let i=k;i<blocks.split("").length;i++){
           let Ncount=0;
         sum=sum.slice(1); 
         sum.push(blocks[i]);
         sum.forEach((e)=>e=="W"?Ncount++:"")
          Ocount=Math.min(Ncount,Ocount)
       }
       return Ocount;



//good


// let minCount =0;
// blocks.split("").slice(0,k).map((e,ac)=>e=="W"?minCount++:"");
// let currentCount = minCount;


// for (let i = k; i < blocks.length; i++) {
//     if (blocks[i - k] === 'W')  currentCount--;    
//     if (blocks[i] === 'W')  currentCount++;
//     minCount = Math.min(minCount, currentCount);
// }

// return minCount;

   };