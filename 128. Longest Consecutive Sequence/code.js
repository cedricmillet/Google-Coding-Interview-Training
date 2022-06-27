/** Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums); // Create a new set a unique numbers
    const n = nums.length;
    
    let longest = 0;
    for(let i=0;i<n; i++) {
        const num = nums[i];
        if(!numSet.has(num-1)) { //  If numset has no predecessor then it's a start of a sequence
            let len = 0;
            while(numSet.has(num+len))
                len ++;
            
            //  Update longest sequence found
            longest = Math.max(longest, len)
        }
    }
    
    return longest
};
