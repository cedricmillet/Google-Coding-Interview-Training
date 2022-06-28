/** Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const n = numbers.length;
    let left = 0;
    let right = n-1;
    while(left<right) {
        let sum = numbers[left] + numbers[right];
        if(sum === target) 
            return [left+1, right+1];
        else if(sum > target)
            right--;
        else left++;
    }
};
