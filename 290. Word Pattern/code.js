/** 290. Word Pattern
 *  Given a pattern and a string s, find if s follows the same pattern.
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let p = {};
    s = s.split(' ');
    

    for(let i=0;i<pattern.length; i++) {
        //  Check matching pattern
        if(p[pattern[i]] && ( p[pattern[i]] != s[i] ) ) return false;
        
        for(const [letter, value] of Object.entries(p)) {
            if(value == s[i] && letter != pattern[i]) return false;
        }
        
        //  Store corresponding pattern (pattern[i] and word s[i])
        p[pattern[i]] = s[i];
        
        //  Is last element AND letters left in input string
        if(i === pattern.length-1 && s.length-1>i) return false;
    }
    
    //  If missing key
    for(let pat of pattern) {
        if(!p[pat]) 
            return false;
    }
    
    return true;
};
