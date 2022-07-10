/** Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique   values from 1 to n.
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    
    function factorial(num) {
      if (num === 0 || num === 1) return 1;
      for (var i = num-1; i >= 1; i--) num *= i;
      return num;
    }

    return factorial(2*n) / ( factorial(n+1) * factorial(n) )
};
