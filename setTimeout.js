// Task: What order are the numnbers (1,2,3,4) logged out in?

function logNumber(){
  console.log(1);

  setTimeout(function(){
    console.log(2)
  }, 1000);

  setTimeout(function(){
    console.log(3)
  }, 0);
  console.log(4)
}

logNumber();


////////////////////////////////////////
//Another Example

const s = new Date().getSeconds();

setTimeout(function() {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500);

while(true) {
  if(new Date().getSeconds() - s >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
}
