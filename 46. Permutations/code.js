Array.prototype.swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}

/** Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 * @param {number[]} nums
 * @return {number[][]}
 Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */
var permute = function(nums) {    
    
    const dfs = (nums, l, r, results=[]) => {
        if(l == r) {
            results.push([...nums]);
            return;
        };
        for(let i=l; i<r; i++) {
            nums.swap(l,i);
            dfs(nums, l+1, r, results);
            nums.swap(l,i);
        }
    }
    
    result = [];
    dfs(nums, 0, nums.length, result);
    
    return result;
};


/*
const result = []

  function permute (arr, m = []) {
    if (arr.length) {
      arr.forEach((item, i) => {
        const restArr = [...arr.slice(0, i), ...arr.slice(i + 1)]
        permute(restArr, [...m, item])
      })
    } else {
      result.push(m)
    }
  }

  permute(inputArr)

  return result
*/
