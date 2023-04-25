/**
 Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Example 1: 

Input: head = [1,1,2]
Output: [1,2]
 */
/**
 *function ListNode(val, next) {
 *    this.val = (val===undefined ? 0 : val)
 *    this.next = (next===undefined ? null : next)
 *}
/*

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function(head) {
    if(!head)
        return head;
    var cur=head;
    while(cur.next != null)
    {
        var nextnode=cur.next;
        if(cur.val == nextnode.val)
        {
             cur.next=cur.next.next;
        }
        else
        {
            cur=cur.next;
        } 
    }
    return head;
};


console.log(deleteDuplicates(head));