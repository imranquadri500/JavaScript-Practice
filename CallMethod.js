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


// Push()


const list1 = [1, 2, 3, 4, 5];
//const list2 = list1.concat([]);
const list2 = list1.slice();

list1.push(6, 7, 8);
console.log(list1);
console.log(list2);
