/** Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
 * @param {character[][]} grid
 * @return {number}
 * Runtime: 65 ms, faster than 99.85% of JavaScript online submissions
 * Memory Usage: 44.8 MB, less than 76.70% of JavaScript online submissions
 */
var numIslands = function(grid) {
    const h = grid.length;
    const w = grid[0].length;
    
    const dfs= (grid, i, j) => {
        
        //  Is out of grid ?
        if(i<0 || j<0 || i>=h || j>=w) {
            return;
        }
        //  Is sea ?
        if(grid[i][j]==="0") {
            return;
        }
        grid[i][j] = "0";
        dfs(grid, i-1, j);
        dfs(grid, i+1, j);
        dfs(grid, i, j-1);
        dfs(grid, i, j+1);
    }
    
    
    let count = 0;
    for(let i=0;i<h; i++) {
        for(let j=0; j<w; j++) {
            if(grid[i][j] === "1") {
                count++;
                dfs(grid, i, j);
            }
        }
    }
    return count;
};
