/** Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const n = nums.length;
    let left = 0;
    let right = n-1;
    
    let maxIterations = Math.log2(n);
    let i=0;
    while(left<=right) {
        const middle = Math.floor((right-left)/2) + left;
        
        const middleValue = nums[middle];
        const leftValue = nums[left];
        const rightValue = nums[right];
        
        if(middleValue === target) return middle;
        
        if(leftValue <= middleValue) { // left part sorted
            if(target > middleValue || target < leftValue) {
                left = middle+1;
            } else {
                right = middle-1
            }
        } else {                        //  right part sorted
            //  6 7 0 1 2
            if(target < middleValue || target > rightValue)
                right = middle-1
            else left = middle+1
        }
        
        i++;
        if(i>maxIterations) break;
    }
    
    return -1;
};
