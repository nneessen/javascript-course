// const friend1 = 'Nick';
// const friend2 = 'Billy';
// const friend3 = 'John';



// const calcAge = function (birthYear) {
    //     return 2037 - birthYear;
    // }
    
    // const years = [1990, 1967, 2002, 2010, 2018];
    
    // for (let i = 0; i < years.length; i++) {
        //     console.log(calcAge(years[i]));
        // }
        

// const friends = ['Nick', 'Billy', 'John'];
// friends.push('Timmy'); // add to end of array
// console.log(friends);

// friends.unshift('John'); // add to beginning of array
// console.log(friends);

// bills = [125, 555, 44]

// const calcTip = function (dollarAmount) {
//     if (dollarAmount >= 50 && dollarAmount <= 300) {
//         tipAmount = dollarAmount * .15
//     } else {
//         tipAmount = dollarAmount * .20
//     } return tipAmount
// }

// tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(tips)

// for (let i =0; i < bills.length; i++) {
//     console.log(`The bill was ${bills[i]}, the tip was ${tips[i]}, and the total was ${bills[i] + tips[i]}`)
// };



// console.log(Jonas)

// const nameKey = 'Name';

// console.log(Jonas['first' + nameKey]);
// console.log(Jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// console.log(Jonas[interestedIn]);

// if (Jonas[interestedIn]) {
//     console.log(Jonas[interestedIn]);
// } else {
//     alert('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// const Jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     }
// }

// console.log(Jonas.calcAge());
// console.log(Jonas.age);

/* LOOP SECTION */ 

// console.log('Lifting weights repetition 1 🏋️‍♀️');

// // for loop keeps running while condition is TRUE
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`)
// };

// const types = [];

// for(let i = 0; i < JonasArray.length; i++) {
//     console.log(JonasArray[i], 'is', typeof(JonasArray[i]))
//     types[i] = typeof(JonasArray[i])
//     console.log(types)
// }

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}