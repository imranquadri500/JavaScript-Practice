// Call() Example

const car1={
  brand: 'Porsche',
  getCarDescription: function(cost, year, color){
    console.log(`This car is a ${this.brand}. The price is ${cost}. The year is ${year}. The color is ${color}.\n `);

  }
};

car1.getCarDescription(80000, 2010, 'blue');

const car2 = {
  brand: 'Ferrari'
}

car1.getCarDescription.call(car2, 200000, 2018, 'Red');
