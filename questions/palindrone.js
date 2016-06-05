// This is the text editor interface. 
// Anything you type or change here will be seen by the other person in real time.
function palindrone(input){
    //aba => true
    //abcba => true
    //abcde => false
    //abba => true
    if (!input){
        return false;
    }
    var mid = Math.floor(input.length/2);
    //console.log('mid is ' + mid);
    var isPalindrone = true;
    for (var i = 0; i <= mid; i++){
        var first = input.charAt(i);
        //console.log('first is ' + first);
        var last = input.charAt(input.length - i - 1);
        //console.log('last is ' + last);
        if (first !== last) {
            isPalindrone = false;
            break
        }
    }
    
    return isPalindrone;
}


console.log(palindrone('abcba'));
console.log(palindrone('aba'));
console.log(palindrone('abba'));
console.log(palindrone('abcde'));
console.log(palindrone(''));
console.log(palindrone(null));
console.log(palindrone(undefined));

// O(N/2)

// abcdcbahabcdcbaijefg
//    ^^^^^^^
// 7
// lagetestStr = abcdcba

// cdc
// cdddc

// get a start point
/*
for (var i=0; input.length; i++) {
    // inpug = abcdcbahabcdcbaijefg
    // i=0
    // start = 'a'
    // next = 'b'
    // nextDiff = 'c'
    // check if start === nextDiff
    // if same, then start the checking for next~nextDiff
    
    
    // get the maxLength
    // from mid, try to find the max chart that is left == right
    // if the max == legnth, return;
    
    // abcdcba
    
    // i = 1
    // abcdefgf
    
}
*/
// start = 'a'

// next get the max length

// O(length/2 * maxFound/2)
// O(n/2*n/2)

