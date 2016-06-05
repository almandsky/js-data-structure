/*


Find the number of ways to express n as sum of some (at least two) consecutive integers.

Example

    For n = 9, the output should be
    isSumOfConsecutive2(n) = 2.

There are two ways to represent n = 9: 2 + 3 + 4 = 9 and 4 + 5 = 9.

    For n = 8, the output should be
    isSumOfConsecutive2(n) = 0.

There are no ways to represent n = 8.

Input/Output

    [time limit] 4000ms (js)

    [input] integer n

    A positive integer.

    Constraints:
    1 ≤ n ≤ 25.

    [output] integer


*/

function isSumOfConsecutive2(n) {
    var found = 0;
    
    for (var i = 1; i < n; i ++) {
        var j = i;
        var sum = 0;
        var isFound = false;
        while (j<=n && !isFound) {
            sum += j;
            if (sum === n) {
                isFound = true;
                found++;
            } else if (sum > n) {
                break;
            }
            j++;
        }
    }
    return found;
}

console.log(isSumOfConsecutive2(9) === 2);

console.log(isSumOfConsecutive2(8) === 0);

console.log(isSumOfConsecutive2(15) === 3);


