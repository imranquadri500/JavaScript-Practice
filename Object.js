// Different Methods for Creating Objects in JavaScript

// 3 Different ways of Creating JavaScript Object

// Method 1:  Object Literal Syntax

const myBoat = {
  length: 24,
  maxSpeed: 45,
  passengers: 14,
  getLength: function(){
    return this.length;
  }
};

// Method 2: new Keyword and Object Constructor

const student = new Object();

student.grade = 12;
student.gpa = 3.7;
student.classes = ['English', 'Algebra', 'Chemistry'];

student.getClasses = function(){
  return this.classes;
};

// Method 3: Constructor function

function Car(color, brand, year){
  this.color = color;
  this.brand = brand;
  this.year = year;
}

Car.prototype.getColor = function(){
  return this.color;
};

const carlysCar = new Car('Blue', 'Ferrari', 2015);
const imranCar = new Car('Red', 'Tesla', 2019);

console.log(carlysCar.getColor());
console.log(imranCar.getColor());
