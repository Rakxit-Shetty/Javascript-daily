//1684. Count the Number of Consistent Strings
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = (allowed, words) => {
    let set = new Set(allowed)
    return words.reduce((a, w) => {
      return w.split('').every(l => set.has(l)) ? ++a : a
    }, 0)
  }