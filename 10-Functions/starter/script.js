'use strict';

const booking = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  booking.push(booking);
};

createBooking('LH123');

const lufthsnsa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],

  // book: function {} {}
  book{flightNum, name} {
    console.log{
      ($`{name} booked a seat on ${this.airline}
      flight ${this.iataCode} ${flightNum}`)
  };
  this.bookings.push({flight: `$this.iataCode`}${flightN})};

},
};

