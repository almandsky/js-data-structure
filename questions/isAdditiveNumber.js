/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    var len = num.length;
    if (len < 3) {
      return false;
    }
    console.log('sky debug 000 num is ' + num);
    var range = Math.max(Math.ceil(len/3), 2);
    console.log('sky debug 001 range is ' + range);
    var result = false;
    for (var i = 1; i <= range; i++) {
      var num1 = parseInt(num.substr(0, i),10);
      if (num1 !== 0 && num1 < Math.pow(10,(i-1))) {
        break;
      }
      console.log('sky debug 002 processing i = ' + i + ', num1 ' + num1);
      var num2 = 0;
      for (var j = 1; j < len - i; j++) {
        num2 = parseInt(num.substr(i,j),10);
        if (num2 !== 0 && num2 < Math.pow(10,(j-1))) {
          break;
        }
        var total = num1 + num2;
        totalStr = total + '';
        var totalLen = totalStr.length;
        var nextStr = num.substr(i + j, totalLen);
        console.log('sky debug 003, num1 is ' + num1 + ', num2 is ' + num2 + ', total is ' + total + ', nextStr is ' + nextStr);
        if (totalStr == nextStr) {
          // result match, recersive to find the next
          endPos = i + j + totalLen;
          if (endPos == len) {
            return true;
          } else {
            // start the regression;
            if (!isAdditiveNumber(num.substr(i))) {
              break;
            } else {
              result = true;
            }
          }
        } else {
          continue;
        }
      }
    }
    return result;
};

console.log(isAdditiveNumber('112358') == true);
console.log(isAdditiveNumber('111') == false);

console.log(isAdditiveNumber('211738') == true);
console.log(isAdditiveNumber('199100199') == true);
console.log(isAdditiveNumber('1023') == false);
console.log(isAdditiveNumber('12122436') == true);
console.log(isAdditiveNumber('101') == true);
console.log(isAdditiveNumber('12012122436') == true);
console.log(isAdditiveNumber('0235813') == false);
console.log(isAdditiveNumber('121474836472147483648') == true);



