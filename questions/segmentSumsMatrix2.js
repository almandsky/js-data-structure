/*


For a given array of integers construct a square matrix A with side length equal to the length of array where A[i, j] is equal to the sum of all elements of the array with indexes between i and j, inclusive.

Note that between i and j means a[i] + a[i + 1] + ... + a[j] for the case i ≤ j, and a[j] + a[j + 1] + ... + a[i] for the case i > j.

Example

For inputArray = [1, 2, 3], the output should be

segmentSumsMatrix2(inputArray) = [[1, 3, 6],
                                  [3, 2, 5],
                                  [6, 5, 3]]

Input/Output

    [time limit] 4000ms (js)

    [input] array.integer inputArray

    Constraints:
    2 ≤ inputArray.length ≤ 5,
    1 ≤ inputArray[i] ≤ 10.

    [output] array.array.integer


*/

function segmentSumsMatrix2(inputArray) {

  var answer = [];
  for (var i = 0; i < inputArray.length; i++) {
    var line = [];
    for (var j = 0; j < inputArray.length; j++) {
      line.push(0);
    }
    answer.push(line);
  }

  for (var i = 0; i < inputArray.length; i++) {
    answer[i][i] = inputArray[i];
    for (var j = i + 1; j < inputArray.length; j++) {
      answer[i][j] = answer[i][j - 1] + inputArray[j];
    }
  }

  for (var i = 0; i < inputArray.length; i++) {
    for (var j = i + 1; j < inputArray.length; j++) {
      answer[j][i] = answer[i][j];
    }
  }

  return answer;
}

console.log(JSON.stringify(segmentSumsMatrix2([1, 2, 3]))  == JSON.stringify([[ 1, 3, 6 ],[ 3, 2, 5 ],[ 6, 5, 3 ]]));

console.log(JSON.stringify(segmentSumsMatrix2([1, 1, 2, 2])) == JSON.stringify([[1,2,4,6],[2,1,3,5],[4,3,2,4],[6,5,4,2]]));


