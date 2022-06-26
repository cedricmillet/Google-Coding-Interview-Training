/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

//  Calculate list Node length
ListNode.prototype.length = function () {
    let ptr = this;
    let len = this ? 1 : 0;
    while(ptr.next) {
        len++;
        ptr = ptr.next;
    }
    return len;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    //  Calculate linked list length
    let len = head.length();
    
    //  Corner case : is the linkedlist of length = 1 ?
    if(n === 1 && len===1) {
        head = head.next;
        return head;
    }
    
    //  Corner case : n is the first element of our list ?
    if(n === len) {
        let tmp = head;
        head = head.next;
        tmp = null;
        return head;
    }
    
    //  Find item to remove
    let i= head ? 1 : 0;
    let cur = head;
    while(cur.next) {
        let idx = len-i+1
        if(idx-1===n) { //  If next item must be removed
            // remove next
            let tmp = cur.next
            cur.next = cur.next.next;
            tmp = null
            break;
        } else {
            i++;
            cur=cur.next;
        }
    }

    return head;
};
