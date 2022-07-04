/** Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //  Split string into array
    s = s.split('');
    
    //  Define expected map values
    const brackets = new Map();
    brackets.set('(', ')');
    brackets.set('{', '}');
    brackets.set('[', ']');
    
    //  Stack to store expected values in order
    const stack = [];
    
    let i = 0;
    while(i < s.length) {
        const char = s[i]
        if(brackets.has(char)) {                //  Is opening bracket ?
            //  Include expected value in stack
            stack.push(brackets.get(char));
        } else {
            const expectedBracket = stack.pop();
            if(expectedBracket !== char) {      //  Is expected closing bracket ?
                console.log(`not expected bracket`, char, ' -expected = ', expectedBracket)
                return false;
            } else {
                // OK bracket has been closed...
            }
        };
        i++;
    }
    
    
    return stack.length===0;
};
