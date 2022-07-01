/** Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;
    
    if(n===1) return 0;
    
    let minIdx = 0;
    let maxProfit = 0;
    
    for(let i=0;i<n;i++) {
        const price = prices[i];
        if(price < prices[minIdx]) {
            minIdx = i;
        } else if (price - prices[minIdx] > maxProfit) {
            maxProfit = price - prices[minIdx];
        }
    }
    
    return maxProfit
};
