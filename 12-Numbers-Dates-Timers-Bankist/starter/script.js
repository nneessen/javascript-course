'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z', 
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

// EVENT HANDLERS

// LOGIN FUNCTIONALITY
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // DISPLAY UI AND MESSAGE
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount)
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.10)) {
    // ADD MOVEMENT
    currentAccount.movements.push(amount);
    // UPDATE UI
    updateUI(currentAccount);
    inputLoanAmount.value = '';
  }
});

// update ui
const updateUI = function(acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
}

// DISPLAY MOVEMENTS
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov.toFixed(2)}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// CREATE USERNAMES
const createUsernames = function (accs) {
  accs.forEach(function(acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('')
  })
};
createUsernames(accounts)


// CALCULATE PRINT BALANCE
const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
}

// DISPLAY SUMMARY
const calcDisplaySummary = function(acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes.toFixed(2)}€`

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out).toFixed(2)}`

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate/100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0)
    labelSumInterest.textContent = `${interest.toFixed(2)}€`
}

btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 && 
    receiverAcc &&
    currentAccount.balance >= amount && 
    receiverAcc?.username !== currentAccount.username) {
      // DOING THE TRANSFER
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);
      updateUI(currentAccount)
    }
});

// FIND INDEX METHOD - RETURNS INDEX OF FOUND ELEMENT AND NOT THE ELEM INSTELF

btnClose.addEventListener('click', function(e){
  e.preventDefault();
  if (inputCloseUsername.value === currentAccount.username && 
    +inputClosePin.value === currentAccount.pin) {
      const index = accounts.findIndex(acc => acc.usernmae === currentAccount.username)
      // delete account
      accounts.splice(index, 1);
      console.log(index);

      // hide ui
      containerApp.style.opacity = 0;
    }
  inputCloseUsername.value = inputClosePin.value = '';
})

let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})

// ARRAY METHODS PRACTICE
//1)
const bankDepositsSum = accounts.flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0)
console.log(bankDepositsSum);

// 2. 

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count :count), 0)

// console.log(numDeposits1000);

// 3.
const {deposits, withdrawals} = accounts.flatMap(acc => acc.movements)
  .reduce((sums, cur) => {
    cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
    return sums;
  }, {deposits: 0, withdrawals: 0})

// this is a nice title -> This Is a Nice Title

const convertTitleCase = function(title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return titleCase;

}


console.log(5 % 2); // 5 = 2 * 2 + 1
console.log(8 % 3); // 8 = 2 * 3 + 2

console.log(6 % 2); // 6 = 3 * 2

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(15));

labelBalance.addEventListener('click', function(e){
  e.preventDefault();
  [...document.querySelectorAll('.movements__row')].forEach(function(row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'lightblue';
  })

})


/* #################################################################################### */
/* #################################################################################### */
/* ##############################  PRACTICE BELOW  #################################### */
/* #################################################################################### */
/* #################################################################################### */

// NUMERIC SEPERATORS
const diameter = 287_460_000_000;
console.log(diameter);

const priceCents = 345_99;
console.log(priceCents);

const transferFee = 15_00;
console.log(transferFee);

console.log(Number('230000')); // numeric seps don't work in strings. 


// ---> BIG INT <---
console.log(2 ** 53 - 1);
console.log(8761038274601823746018273460182734601827364n);
console.log(BigInt(8761038274601823746018273460182734601827364));

// Operations
console.log(10000n + 10000n);
console.log(18726301827360182736n * 97615239761523971653n);

const huge = 9871263498276349287364234n;
const num = 23;
console.log(huge * BigInt(num)); // cannot mix bigint with regular #