/**
 * @param {string} s
 * @return {number}
 https://leetcode.com/problems/roman-to-integer/submissions/
 Runtime: 128 ms, faster than 93.50% of JavaScript online submissions for Roman to Integer.
 */
var romanToInt = function(s) {
    
    const values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    let total = 0;
    for(let i=s.length-1;i>=0;i--) {
        const letter = s[i];
        
        const value = values[letter];  
        //  Add letter value to sum
        total += value;  
        
        //  Remove predecessor
        while(i>=1 && values[s[i-1]]<value) {   //  If predecor value lower than current value
            total-=values[s[i-1]];
            i--;
        }
    }
    return total;
};
