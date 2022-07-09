/** Given the sorted rotated array nums of unique elements, return the minimum element of this array.
 *  Algorithm that runs in O(log n) time.
 * @param {number[]} nums
 * @return {number}
 * Faster than 86.23% of JavaScript online submissions
 * Memory Usage: 41.9 MB, less than 80.62% of JavaScript online submissions
 */
var findMin = function(nums) {
    const n = nums.length;
    if(n===1) return nums[0];
    //  Binary search pointers
    let left = 0;
    let right = n - 1;
    let min = nums[0];
    //  Prevent infinite loop
    let maxIteration = Math.log2(n);
    let i=0;
    
    
    while(left<=right) {
        const middleIdx = Math.floor((left+right)/2);    
        const isLeftPartSorted = nums[left] <= nums[middleIdx-1]
        if(isLeftPartSorted) { // [4,5,6,7,0,1,2]
            min = Math.min(nums[left], min);
            left = middleIdx;
        } else {               // [7,0,1,2,4,5,6]
            right = middleIdx;
            min = Math.min(nums[middleIdx+1], min);
        }

        if(i++ > maxIteration)
            break;
    }
    
    return min;
};
