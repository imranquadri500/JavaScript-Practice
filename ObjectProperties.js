// Object Properties

const a = {};
const b = {name: 'b'};
const c = {name: 'c'};

// Only Strings are allowed as properties on Objects

a[b] = 200; // a['object object'] = 200
a[c] = 400; // a['object object'] = 400

console.log(a[b]); // logs the recent set value
// console.log(a['object object]');
