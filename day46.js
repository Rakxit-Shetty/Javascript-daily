//4. Median of Two Sorted Arrays


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let srt= [...nums1,...nums2].sort((a,b)=>a-b);
    if(srt.length%2===0){
 
       return (Number(srt[Math.floor(srt.length/2)]) + Number(srt[Math.floor(srt.length/2)-1]))/2
      
    }else{
        return srt[Math.floor(srt.length/2)];
    }
 };