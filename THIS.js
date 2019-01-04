// using 'This' Keyword

var house = {
  price: 100000,
  squareFeet: 2000,
  owner: 'Imran',
  getPricePerSquareFoot: function(){
    return this.price/this.squareFeet;
  }
};

console.log(house.price);
console.log(house.getPricePerSquareFoot());
