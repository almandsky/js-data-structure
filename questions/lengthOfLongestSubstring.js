/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring_ori = function(s) {
    var longest = '';
    var tempLongest = '';
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        // try to see if there is repeated char in the remaining string
        var repeatedPos = s.indexOf(char, i + 1);
        var tempStr = '';
        console.log('sky debug 001 processing i ' + i + ', char is ' + char + ', repeatedPos is ' + repeatedPos);
        if (repeatedPos >= 0) {
            // repeated words found.
            // check if there is other repeated works.
            tempStr = s.substring(i,repeatedPos);
        } else {
            tempStr = s.substring(i);
        }
        console.log('sky debug 002 tempStr is ' + tempStr);
        for (var j = 0; j < tempStr.length; j++){
            var tempChar = tempStr[j];
            if (tempLongest.indexOf(tempChar) >= 0) {
                console.log('sky debug 002 char is repeated ' + tempChar);
                // repeated words found
                // check if the tempLongest is larger than longest
                if (tempLongest.length >= longest.length) {
                    console.log('sky debug 004 tempLongest is found ' + tempLongest);
                    longest = tempLongest;
                    tempLongest = tempChar;
                } else {
                    break;
                }
            } else {
                tempLongest += tempChar;
                console.log('sky debug 003 char is not repeated ' + tempChar);
            }
        }
        if (tempLongest.length >= longest.length) {
            console.log('sky debug 005 tempLongest is found ' + tempLongest);
            longest = tempLongest;
            tempLongest = '';
        } else {
            tempLongest = '';
        }
    }
    if (tempLongest.length >= longest.length) {
        console.log('sky debug 006 tempLongest is found ' + tempLongest);
        longest = tempLongest;
        tempLongest = '';
    }
    return longest.length;
};


var lengthOfLongestSubstring = function(s) {
    var n = s.length;
    var ans = 0;
    var index = [];

    for (var i = 0, j = 0; j < n; j++) {
        if (!index[s.charAt(j)]) {
            index[s.charAt(j)] = 0;
        }
        i = Math.max(index[s.charAt(j)], i);
        ans = Math.max(ans, j - i + 1);
        index[s.charAt(j)] = j + 1;
    }
    return ans;
};

//console.log(lengthOfLongestSubstring('abcabcbb'));

//console.log(lengthOfLongestSubstring('aab'));

//console.log(lengthOfLongestSubstring('dvdf'));
//console.log(lengthOfLongestSubstring('jbpnbwwd'));
console.log(lengthOfLongestSubstring('qrsvbspk'));

"qrsvbspk"
