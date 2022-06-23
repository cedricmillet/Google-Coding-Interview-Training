/** Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
 * You must solve the problem without using any built-in library for handling large integers (such as BigInteger). 
 * You must also NOT CONVERT the inputs to integers directly.
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    //  DO NOT CONVERT DIRECTLY TO INT, WORK WITH STRING FIRST.
    //  RETURN A STRING...
    let result = "";
    
    //  Find long / short
    let longest = Math.max(num1.length, num2.length) === num1.length ? num1 : num2;
    let shortest = longest==num1 ? num2 : num1;
    
    //  Split to simplify most right element, with pop() method
    shortest = shortest.split('');
    
    let carry = 0;
    
    //  Calculate sum of each digits, from right to left, with carry
    for(let i=longest.length-1; i>=0; i--) {
        const l = +longest[i];                      //  To integer
        const s = +(shortest.pop()) || 0;           //  To integer
        //  Calculate
        let sum = l + s + carry;
        
        //  Reset carry
        carry = 0;
        
        //  Calculate next carry
        while(sum>=10) {
            sum -= 10;
            carry++;
        }
        
        result = sum + result;
    }
    
    //  Corner case, when carry is pending because of the most left digit
    if(carry > 0)
        result = carry + result;
    
    return result;
};
