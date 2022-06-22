/** 11. Container With Most Water
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const len = height.length;
    /*
    //  O(n²) => too slow
    let max = 0;
    for(let i=0;i<len-1; i++) {
        for(let j=i+1; j<len; j++) {
            let width = Math.abs(j-i)
            let h = Math.min(height[i], height[j]);
            let area = h*width;
            if(area>max) max = area;
        }
    }*/
    
    
    
    
    //  2 pointer approach
    const calcArea = (j,i) => Math.min(height[i], height[j]) * Math.abs(j-i);
    let left = 0;
    let right = len-1;
    let max = 0;
    while(left<right) {
        let area = calcArea(right, left);
        
        if(height[left]>height[right]) right--;
        else left++;
        
        max = Math.max(area, max);
    }
    
    return max;
};
