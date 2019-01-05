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
