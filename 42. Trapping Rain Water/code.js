/** Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 * @param {number[]} height
 * @return {number}
 * O(1)
 */
var trap = function(height) {
    const n = height.length;
    let water = 0;
    let left = 0;
    let right = n - 1;
    let maxLeft = height[left];
    let maxRight = height[n-1];
    
    while(left<right) {
        if(maxLeft < maxRight) {
            left++;
            maxLeft = Math.max(height[left], maxLeft);
            water += maxLeft - height[left];
        } else {
            right--;
            maxRight = Math.max(height[right], maxRight);
            water += maxRight - height[right];
        }
    }
    
    return water
};
