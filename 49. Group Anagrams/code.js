/** Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = new Map();
    for(let str of strs) {
        //  Sort str alphabetically, sorted result will be the key of our hashmap
        [...sorted] = str;
        sorted.sort();
        const key = sorted.join('');
        
        //  Get / Set Hashmap
        if(res.has(key)) res.set(key, res.get(key).concat(str));
        else res.set(key, [str]);
    }

    return [...res.values()];
};
