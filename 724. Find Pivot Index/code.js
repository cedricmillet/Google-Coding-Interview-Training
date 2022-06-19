/**
 * @param {number[]} nums
 * @return {number}
 [1,7,3,6,5,6]
 [2,1,-1]
 */
var pivotIndex = function(nums) {
    const len = nums.length;
    let leftSum = 0;
    let rightSum = nums.reduce((a,b) => a+b);
    for(let pivot=0;pivot<len;pivot++) {
        if(leftSum === rightSum - leftSum - nums[pivot]) {
            return pivot
        }
        leftSum += nums[pivot];
    }
    return -1;
    
};
