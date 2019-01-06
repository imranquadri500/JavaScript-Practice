// Object Properties

const a = {};
const b = {name: 'b'};
const c = {name: 'c'};

// Only Strings are allowed as properties on Objects

a[b] = 200; // a['object object'] = 200
a[c] = 400; // a['object object'] = 400

console.log(a[b]); // logs the recent set value
// console.log(a['object object]');

//////////////////////////////////////
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function(v) {
    this.vertices.push(v);
  }
};

var g = new Graph();
// g is an object with own properties 'vertices' and 'edges'.
// g.[[Prototype]] is the value of Graph.prototype when new Graph() is executed.
