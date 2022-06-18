/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    /*
    const count = [];
    for(let i=0;i<nums.length;i++) {
        const f = count.find(c => c.n === nums[i]);
        if(f) f.c++;
        else count.push({n: nums[i], c: 1});
    }
    console.log(count, count.find(c => c.c !== 2))
    return count.find(c => c.c !== 2).n*/
    
    return nums.reduce((a,b) => a^b)
};
