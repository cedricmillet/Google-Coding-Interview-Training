/** Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const prefix = {};
    const postfix = {};
    const ans = [];
    
    // ---------------------------------------------------------
    //  #1 - Calculate with only 1 loop for prefix AND postfix => but unreadable
    //  faster than 74.30% of JavaScript online submissions
    // ---------------------------------------------------------
    //for(let i=0; i<n; i++) {
    //    prefix[i] = i===0 ? nums[i] : prefix[i-1] * nums[i];
    //    const i2 = n-i-1;
    //    postfix[i2] = i2===n-1 ? nums[i2] : postfix[i2+1] * nums[i2];
    //}
    
    // ---------------------------------------------------------
    //  #2 - Calculate with 2 separated loops : faster than 16.26% of JavaScript online submissions
    //  But more readable for a google interview....
    // ---------------------------------------------------------
    
    //  Calculate prefix product
    for(let i=0; i<n; i++) 
        prefix[i] = i===0 ? nums[i] : prefix[i-1] * nums[i];
    
    //  Calculate postfix product
    for(let i=n-1; i>=0; i--)
        postfix[i] = i===n-1 ? nums[i] : postfix[i+1] * nums[i];
    
    //  Calculate answer
    for(let i=0; i<n; i++) {
        const pref = i==0 ? 1 : prefix[i-1];
        const post = i==n-1 ? 1 : postfix[i+1];
        ans.push(pref * post);
    }
    
    return ans;
};
