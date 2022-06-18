/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const len = nums.length;
    const triplets = [];
    const target = 0;
    
    for(let i=0;i<len;i++) {
        for(let j=0;j<len;j++) {
            if(i===j) continue;
            for(let k=0;k<len;k++) {
                if(k===i) continue;
                if(k===j) continue;
                
                //  Calculate sum
                const values = [nums[i], nums[j], nums[k]].sort();
                const sum = values.reduce((a,b) => a+b);
                
                //  Is sum == target then add to result array
                if(sum===target) {
                    //  Prevent duplicate values
                    if(triplets.find(t => {
                        const idx = t.values.sort();
                        const f =  values.toString() == idx.toString();
                        return f;
                    }) === undefined) {
                        triplets.push({indices: [i,j,k], values});
                    }
                }
            }
        }
    }
    
    return triplets.map(t => t.values);
};
