//1218. Longest Arithmetic Subsequence of Given Difference
/**
 * @param {number[]} arr
 * @param {number} dif
 * @return {number}
 */
var longestSubsequence = function(arr, dif) {
    
    let list = {}, maxLength = 1;

    arr.forEach((num)=> {
    list[num - dif] ? list[num] = list[num - dif] + 1 : list[num] = 1;
        maxLength = Math.max(maxLength, list[num]);
    });

    return maxLength;
    
//     let dp = {}; // Hash table to store the length of sequences
//     let maxLength = 1; // Initialize the maximum length to 1

//   // Iterate through each element in the array
//   arr.forEach((num)=> {
//     // Check if the current element minus the difference exists in the hash table
//     if (dp[num - dif]) {
//       // If it exists, update the current element's sequence length
//       dp[num] = dp[num - dif] + 1;
//     } else {
//       // If it doesn't exist, set the current element's sequence length to 1
//       dp[num] = 1;
//     }

//     // Update the maximum length if necessary
//     maxLength = Math.max(maxLength, dp[num]);
//   })

//   return maxLength;
};