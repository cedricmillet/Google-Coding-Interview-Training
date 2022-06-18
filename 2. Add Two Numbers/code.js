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
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    
    let next = head;
    let carry = 0;
    while(l1 || l2 || carry!=0) {
        let s = 0;
        
        if(l1) {
            s += l1.val;  
            l1 = l1.next;
        }
        if(l2) {
            s += l2.val;
            l2 = l2.next;
        }
        
        s = s+carry;
        carry = 0;

        while(s>=10) {
            s -= 10;
            carry++;
        }
        next.next = new ListNode(s);
        next = next.next
    }    
    
    
    return head.next;
};
