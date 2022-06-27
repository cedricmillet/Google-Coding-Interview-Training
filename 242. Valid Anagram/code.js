/** Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //  1rst solution = remove letters and check final length == 0
    //  Bad idea = faster than 5.02% of JavaScript online submissions
    /*s = s.split('')
    let letters = t.split('');
    for(let letter of letters) {
        let idx = s.indexOf(letter);
        if(idx !== -1) s.splice(idx, 1)
        else return false
    }
    return s.length === 0; */
    
    //  2nd solution : count occurence of each letter
    //  heap ? hashmap ?
    
    //  3rd solution : sort s and t O(nlogn) and compare
    //  faster than 7.27% of JavaScript online submissions
    [...s] = s; //  split letters
    [...t] = t;
    s.sort((a,b) => { if(a>b) return -1; if(a<b) return 1; else return 0; });   //  sort
    t.sort((a,b) => { if(a>b) return -1; if(a<b) return 1; else return 0; });
    return s.join('') === t.join('');   //  compare strings
};
