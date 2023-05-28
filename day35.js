//832. Flipping an Image
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let rev =image.map((ele)=>ele.reverse());
   return rev.map((ele)=>ele.map((ele)=>ele===0 ? 1 : 0))
};