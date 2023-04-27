/**
Given a linked list, swap every two adjacent nodes and return its head. 
You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:

Input: head = [1,2,3,4]
Output: [2,1,4,3]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {   
    if(!head || !head.next) return head; //If there are less than 2 nodes in the given nodes, then no need to do anything just return the list as it is.
		
    dummyNode = new ListNode();
    
    prevNode = dummyNode;
    currNode = head;
    
    while(currNode && currNode.next){
        prevNode.next = currNode.next;
        currNode.next = prevNode.next.next;
        prevNode.next.next = currNode;
        
        prevNode = currNode;
        currNode = currNode.next;
    }
    
    return dummyNode.next;
};