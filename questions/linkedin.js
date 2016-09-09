//For the given array of members:

<script>
var members = [
    {
        name: 'Bill Denbrough',
        id: 1
    },
    {
        name: 'Ben Hanscom',
        id: 2
    },
    {
        name: 'Mike Hanlon',
        id: 3
    },
    {
        name: 'Richie Tozier',
        id: 4
    },
    {
        name: 'Beverly Marsh',
        id: 5
    },
    {
        name: 'Eddie Kaspbrak',
        id: 6
    },
    {
        name: 'Stan Uris',
        id: 7
    }  
];

var targetDiv = document.getDocumentById('content');
if (!targetDiv) {
   return;
}

for (var i = 0; i<members.length; i++ ){
    // generate the a element,
    // insert it into the dom
    var member = members[i];
    var linkElement = document.createElement('a')
    linkElment.setAttribute('href', 'profile.jsp?id='+ member.id);
    linkElment.innerHtml = member.name;
    targetDiv.appendChild(linkElement);
}

</script>

<div id="content">
    <a href="profile.jsp?id=<id>">Member Name</a>
    <a href="profile.jsp?id=<id>">Member Name</a>
    <a href="profile.jsp?id=<id>">Member Name</a>
</div>

//insert links for each of the members into the content div
<a href="profile.jsp?id=<id>">Member Name</a>






function isPalindrome(str) {
    // first strip out the space and to lower case
    // get the middle of the string
    // compare the start / end of the string.
    str = str.toLowerCase();
    var re = /\s/g;
    str = str.replace(re, '');
    var mid = Math.floor(str.length / 2);
    var isPal = true;
    for (var i = 0; i <= mid; i++) {
        var first = str.charAt(i);
        var last = str.charAt(str.length - 1 - i);
        if (first !== last) {
            isPal = false;
            break;
        }
    }
    return isPal;
}

console.log(isPalindrome("racecar")) // true
console.log(isPalindrome("raceecar")) // true
console.log(isPalindrome("dog"))     // false
console.log(isPalindrome("madam Im adam")) // madamimadam  => true
console.log(isPalindrome("madam Im adaM")) // madamimadam  => true
console.log(isPalindrome("")) // true
console.log(isPalindrome("  ")) // true




var Foo = function( a ) { 
  
  function bar() {   
    return a; 
  }
  this.baz = function() {   
    return a; 
  };
  this.bar = bar;
  this.a = a;
};
 
Foo.prototype = {
  biz: function() {    
    return this.a; 
  }
};
 
var f = new Foo( 8 );
f.bar(); // js error
f.baz(); // 8
f.biz(); // a undefined