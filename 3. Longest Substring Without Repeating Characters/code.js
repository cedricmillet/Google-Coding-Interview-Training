/** Given a string s, find the length of the longest substring without repeating characters.
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const len = s.length;
    let substrings = [];
    let ptr = "";
    for(let i=0;i<len;i++) {        
        if(ptr.includes(s[i])) {    //  si le mot actuel contient la lettre courante
            const idx = ptr.indexOf(s[i]);  //  emplacement de la lettre courante dans le ptr
            const sub = ptr.substring(idx+1, ptr.length); //    suppression de la lettre
            substrings.push(ptr);
            ptr = `${sub}${s[i]}`;
        } else {
            ptr += s[i];
        }
    }
    
    //  Push last ptr into substring array
    substrings.push(ptr)
    //  Sort substrings by descending length
    substrings.sort((a,b)=>b.length - a.length);
    //  Return longest substring
    return substrings[0].length;
};
