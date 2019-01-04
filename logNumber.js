var num = 50;
 
function logNumber() {
    console.log(num);
    var num = 100;
}
 
logNumber();


// logging X and Y

‘use strict’;
 
(function() {
  var x = y = 200;
})();
 
console.log('y: ', y);
console.log('x: ', x);
