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
