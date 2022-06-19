/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    /*
    //  BAD WAY !!!!!!
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
    */
    
    
    
    const len = nums.length;
    nums = nums.sort((a,b) => a-b);
    console.log(nums)
    const result = [];
    
    
    for(let i=0;i<len-2;i++) {
        //  duplicate i values
		if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}
        // right window [j,k]
        for(let j=i+1, k=len-1;j<k;) {
            const sum = nums[i] + nums[j] + nums[k];
            if(sum===0) {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                // Prevent duplicate
                while (j < k && nums[j] == nums[j - 1])
					j++;
				while (j < k && nums[k] == nums[k + 1])
					k--;
            } else if(sum>0) {
                k--;    
            } else {
                j++;    
            }
            
        }
    }
    //console.log(result);
    return result;
};
