// Apply() Method Example

const car1={
  brand: 'Porsche',
  getCarDescription: function(cost, year, color){
    console.log(`This car is a ${this.brand}. The price is ${cost}. The year is ${year}. The color is ${color}.\n `);

  }
};

const car2 = {
  brand: 'Ferrari'
}

const car3 = {
  brand: 'Jaguar'
};

car1.getCarDescription(80000, 2010, 'blue');

car1.getCarDescription.call(car2, 200000, 2018, 'Red');

car1.getCarDescription.apply(car3, [30000, 2019, 'White']);

