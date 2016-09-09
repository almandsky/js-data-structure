/*

var Foo = function( a ) { 
  
  function bar() {   
    return a; 
  }
  this.baz = function() {   
    return a; 
  };
};
 
Foo.prototype = {
  biz: function() {    
    return a; 
  }
};
 
var f = new Foo( 8 );
f.bar()
f.baz()
f.biz()

*/


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
console.log(f.bar()); // js error
console.log(f.baz()); // 8
console.log(f.biz()); // a undefined