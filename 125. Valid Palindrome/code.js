/** 74 ms, faster than 94.27% of JavaScript online submissions for Valid Palindrome.
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/gi, '');
    return s === s.split('').reverse().join('')
};
