/** Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex==0) return [1];
    if(rowIndex==1) return [1, 1];

    //  Get preceding row
    const before = getRow(rowIndex-1);

    //  Create requested row
    let r = [];
    for(let i = 0; i< rowIndex+1; i++) {
        if(i == 0 || i == rowIndex) r.push(1)
        else r.push(before[i-1]+before[i]);
    }

    //  Return requested row
    return r;
};
