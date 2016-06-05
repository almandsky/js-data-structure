/**
 * @param {number} n
 * @return {number}
 */
var breakResult = {
    1: 1,
    2: 1,
    3: 2,
    4: 4,
    5: 6,
    6: 9,
    7: 12
}
var integerBreak = function(n) {
    // find 9 - 3 + 3
    // find 8 - 4 + 4
    // find 7 - 3 + 4 
    // find 6 - no break
    // find 5 - no break
    // find 4 - no break
    // find 3 - no break
    // find 2 - no break
    // find 1 - no break
    
    // for special input
    // 1 => 1 // 1
    // 2 => 1 + 1; // 1
    // 3 => 1 + 2; // 2
    // 4 => 2 + 2; // 4
    // 5 => 2 + 3; // 6
    // 6 => 3 + 3; // 9
    // 7 => 3 + 4; // 12
    // 8 => 3 + 3 + 2; // 18
    // 9 => 3 + 3 + 3 ; // 27
    // 10 => 3 + 3 + 4 ; // 36
    // 11 => 3 + 3 + 4 + 4;// 144
    if (breakResult.hasOwnProperty(n)) {
        return breakResult[n];
    }
    var remain = n%3;
    var result = 0;
    if (remain === 2) {
        result = (2*integerBreak(n-2));
    } else if (remain === 1) {
        result = (4*integerBreak(n-4));
    } else {
        result = (3*integerBreak(n-3));
    }
    breakResult[n] = result;
    return result;
};

console.log(integerBreak(1));
console.log(integerBreak(2));
console.log(integerBreak(3));
console.log(integerBreak(7));
console.log(integerBreak(10));
console.log(integerBreak(11));
console.log(integerBreak(12));
