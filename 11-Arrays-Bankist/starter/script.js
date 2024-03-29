'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movement) {
  containerMovements.innerHTML = '';
  movement.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdraw';

    const html = `
<div class="movements">
       <div class="movements__row">
          <div class="movements__type movements__type--deposit">${type}">${
      i + 1
    }
          ${type}</div>

          <div class="movements__value">4 ${mov}</div>
        </div>

`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split('  ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
//slice mrthod:
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log(arr.slice([...arr]));

//splice method:
console.log(arr.splice(2));
console.log(arr);

//reverse method:
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//concat method:
const letters = arr.concat(arr2);
console.log(letters);

//join method:
console.log(letters.join(' -'));


//add method:
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//getting last array element:
console.log(arr[arr.length -1]);
console.log(arr.at(-1));
console.log(arr.slice(-1)[0]);

*/

/*

const movement = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movements){
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: you depsited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: you withdraw ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH-----');
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`you depsited ${movement}`);
  } else {
    console.log(`you withdraw ${Math.abs(movement)}`);
  }
});
//0: function(200)
//1: function(450)
//2: function(400)
//...
*/

/*
const currencie = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});



const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSD.push(mov * eurToUsd);
console.log(movementsUSDfor);

const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const wothdrawals = movements.filter(mov => mov > 0);
console.log(wothdrawals);


console.log(movements);

// accumulator -> $NNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//maximum value -> $NNOWBALL
const max = movements.reduce((acc, cur) => Math.max(acc, cur), 0);
console.log(max);


console.log(movments);

//equality:
console.log(movments.include(-130));

//some: condition:
console.log(movements.some(mov => mov === 0));

//every: condition:
console.log(!movements.every(mov => mov < 0));

//seprate callback:
const deposit = mov  => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.include(deposit));

*/

const arr = [[0, 1, 2, 3] , 4, 5],[ 6, 7];
console.log(arr.flat());

const arrDeep = [[[1, 2], [4, 5, 6],[7, 8]];
console.log(arrDeep.flat(2));



const overalBalance = accounts
.map(acc => acc.movements)
.flat()
.reduce((acc, mov) => acc + mov , 0);
console.log(overalBalance);

