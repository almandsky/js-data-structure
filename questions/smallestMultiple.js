/*


Find the smallest integer that is divisible by all integers on a given interval [left, right].

Example

For left = 2 and right = 4, the output should be
smallestMultiple(left, right) = 12.

Input/Output

    [time limit] 4000ms (js)

    [input] integer left

    Left bound.

    Constraints:
    1 ≤ left ≤ right.

    [input] integer right

    Right bound.

    Constraints:
    left ≤ right ≤ 15.

    [output] integer


*/

function smallestMultiple(left, right) {
    if (left === right) {
        return left;
    }
    var mul = left;
    for (var i = left + 1; i <= right; i++) {
        // check if mul can divided by i
        if (mul%i !== 0) {
            // need to increase mul
            var j = 2;
            while (j <= right) {
                if ((j*mul)%i == 0) {
                    mul = j*mul;
                    break;
                }   
                j++;
            }
        }
    }
    return mul;
}