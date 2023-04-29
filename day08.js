/////////////////////////
//1528. Shuffle String
/*
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let a=[];
  //  let indices=[7,6,5,4,3,2,1,0];
  //  let s="codeleet";
   
      let ss=s.split("");
      console.log(s)
    for(let i=0;i<ss.length;i++){
        a[indices[i]]=ss[i];
  
    }  
    return(a.join(""))
  };
  ////////////////////////////////
  //2194. Cells in a Range on an Excel Sheet
  /**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    let [f1,f2]=s.split(":");
      let res=[]
      for(let i=f1.charCodeAt(0);i<=f2.charCodeAt(0);i++)
      {
          for(let j=f1[1];j<=f2[1];j++)
      //console.log(String.fromCharCode(i)+j);
      res.push(String.fromCharCode(i)+j)
    //eturn (String.fromCharCode(i)+j);
      }
     // );
      
     return res;
  };

  //////////////////////////////
  