//Closure Code Example
//A closure is an inner function that has access to the scope of an enclosing function
//or function and outer fling will have access to variables in three seperate scopes the 
//variables and its own scope which is the scope of the inner function the variables and 
//the scope of outer function and the global variables and the global scope

const  globalVariable = 'global var';

function outterFunc(param1){
  const variable1 = 'var one';
  
  function innerFunc(param2){
    const variable2 = 'var two';

    console.log('globalVariable:', globalVariable);
    console.log('variable1:', variable1);
    console.log('variable2:', variable2);
    console.log('param1:', param1)
    console.log('param2:', param2)
  }
  innerFunc('param one');
}
outterFunc('param two');
