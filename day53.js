//2363. Merge Similar Items

/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    
    let list={}
    items1.concat(items2).forEach((ele)=>list[ele[0]]=(list[ele[0]]||0)+ele[1]
    )
    return Object.entries(list)
    };

    //21. Merge Two Sorted Lists

    /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
 if (!l1 || !l2) return l1 || l2
    if(l1.val<l2.val){
         l1.next=mergeTwoLists(l1.next,l2); 
        return l1;
        }
        else{
         l2.next=mergeTwoLists(l1,l2.next); 
        return l2; 
        }
};
    