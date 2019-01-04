// //Code out an example for IIFE
// IIFE is required  when we want to call the function immediately after we define it.
// The main reason to use an IIFE is to preserve a private 
// scope within your function

(function doubleNumber(num) {
  return num * 2;
})(10);
 
 
 
(function() {
  
  function getTotal(a, b) {
    return a + b;
  }
  
  var $ = 'currency';
  
  if (true) console.log('hello world');
  
})();


// Hoisting and IIFE

// Scope a d Self

var myCar = {
  color: 'Blue',
  logColor: function(){
    var self = this;
    console.log('In logColor - this.color:' + this.color);
    console.log('In logColor - self.color:' + self.color);

    (function(){
      console.log('In IIFE - this.color:' + this.color);
      console.log('In IIFE - self.color:' + self.color);
    })();
  }
}

myCar.logColor();
