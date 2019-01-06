// bind() function method
//The bind method allows you to bind to the this context of a function to a particular object similar to the way that the call and apply methods work with a few differences.

this.distance = 10000;

const roadTrip1 = {
  distance: 3000,
  getDistance: function(unit, caption){
    return this.distance + unit + caption;
  }
};

const roadTrip2 = {
  distance: 5000
}

const getTripDistance = roadTrip1.getDistance.bind(roadTrip2, ' km',);
getTripDistance(' in total');


// Example of two accounts 

const account1 = {
  name: 'Jen',
  totalAmount: 5000,
  deductAmount: function(amount){
    this.totalAmount-= amount;
    return 'Amount in account' + this.totalAmount;
  },
};

const account2 = {
  name: 'James',
  totalAmount: 8000,
};

const withdrawAccount = function(amount){
  return account1.deductAmount.bind(account2, amount);
};

console.log(withdrawAccount(500)());
console.log(withdrawAccount(200)());

//Output:  Amount in account: 7500
//         Amount in account: 7300
