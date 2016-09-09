function numberGame(n, d) {
    var processed = {};
    function findNext(n, d, step) {
        console.log('processing n: ' + n);
        var strN = n;
        var key = strN + '_' + d;
        if (d === step) {
          //processed[key] = d;
          return d;
        }
        if (processed.hasOwnProperty(key) && processed[key] > 0) {
            return processed[key];
        }
        var len = strN.length;
        if (len <= 1) {
            return step;
        }
        var depth = step;
        var handled = [];
        for (var i = 0; i < len; i++){
            var newStrN = '';
            if (i == 0) {
              newStrN = strN.substring(i+1, len);
            }
            var newStrN = strN.substring(0,i) + strN.substring(i + 1,len)
            var newN = parseInt(newStrN, 10);
            if (handled.indexOf(newStrN) >=0) {
              continue;
            }
            console.log('sky debug 2001 newStrN is ' + newStrN);
            if (newN !== 0 && newN % (d - step) === 0) {
              depth = findNext(newN, d, step+1);
            }
            handled.push(newStrN);

            if (depth >= d) {
                return depth;
            }
        }
        processed[key] = depth;
        return depth;
    }
    var result = findNext(n,d,0);
    if (result > d) {
        return d;
    } else {
        return result;
    }
}


var result = numberGame("9999999999999998", 2)
//var result = numberGame(5555, 3)
//var result = numberGame(100, 3)

//var result = numberGame(91540690651501, 11)

console.log('sky debug 4001 end result is ' + result);