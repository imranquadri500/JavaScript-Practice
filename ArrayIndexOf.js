// Array IndexOf Method 

// Array and object are passed by reference and it's never the same although it looks same. That's the reason the output is -1

//But if two different variables both reference the same underlying object then they are equal.

const myArray = [5];
const anotherArray = myArray;

console.log([10,20,30,40,50].indexOf(30)); // 2
console.log([{name: 'Pam'}, {name:'kent'}].indexOf({name:'kent'})); // -1

console.log('hellow world'.indexOf('o')); // 4
console.log([[1],[2],[3],[4], myArray].indexOf(anotherArray)); //4

