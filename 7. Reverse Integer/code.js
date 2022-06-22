/**Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = x.toString();
    let neg = false;
    if(x.indexOf('-') !== -1) {
        neg = true;
        x = x.substring(1, x.length);
    }
    let v = x.split('').reverse().join('');
    console.log("v => ",v, neg)
    v = neg ? `-${v}` : `${v}`;
    v = +v;
    return v<=-2147483647 || v>=2147483647 ? 0 : v
};
