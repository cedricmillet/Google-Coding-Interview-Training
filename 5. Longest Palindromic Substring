/** Given a string s, return the longest palindromic substring in s.
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length;
    
    const lookForPalindrome = (l, r) => {
        if(s[l]!==s[r]) return "";
        while(s[l]===s[r] && s[l-1]===s[r+1] && s[l-1]!==undefined) {
            l--;
            r++;
        }
        return s.slice(l, r+1);
    }
    
    if(n==1) return s;
    
    let max = "";
    for(let i=0;i<n-1; i++) {
        const pal1 = lookForPalindrome(i, i+1);
        const pal2 = lookForPalindrome(i, i);
        if(pal1.length>max.length) max = pal1;
        if(pal2.length>max.length) max = pal2;
    }
    
    return max;
};
