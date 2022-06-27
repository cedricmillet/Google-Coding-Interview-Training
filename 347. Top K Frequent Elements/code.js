/** Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let occurences = {};    //  hashmap ?
    const n = nums.length;
    
    //  1rst step : count
    for(let i=0; i<n; i++) {
        if(occurences[nums[i]] !== undefined) occurences[nums[i]]++;
        else occurences[nums[i]] = 1;
    }
    
    //  2nd step : find k elements
    const arr = Object.entries(occurences).map(occ => { return {n: occ[0], occ: occ[1]}; });
    
    //  Sort by occurence counter
    arr.sort((a,b) => b.occ - a.occ);
    
    //  Return k most frequent elements
    return arr.slice(0, k).map(v => v.n)
};
