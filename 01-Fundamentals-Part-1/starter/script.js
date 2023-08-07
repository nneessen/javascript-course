/*
let johnMass = 34
let johnHeight = 1.5
let billMass = 47
let billHeight = 1.3

let johnBMI = johnMass / johnHeight ** 2
let billBMI = billMass / billHeight ** 2
// bills BMI is higher

let billHigherBMI = billBMI > johnBMI

if (billBMI > johnBMI) {
    console.log(`Bill's BMI of ${billBMI} is higher than John's BMI of ${johnBMI}...`)
} else {
    console.log(`John's BMI of ${johnBMI} is higher than Bill's BMI of ${johnBMI}...`)
}
*/

// const inputYear = Number('1991')


// const money = 0;
// if (money) {
//     console.log("Don't spend it all at once!")
// } else {
//     console.log("You should get a job!")
// }

// const age = 18;
// if (age === 18) console.log(`You just became an adult!`)

// const day = 'monday'

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log(`Plan course structure`);
//         console.log(`Go to coding meetup`);
//         break;
//     case 'tuesday':
//         console.log(`Prepare theory videos`);
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log(`Write code examples`);
//         break;
//     case 'friday':
//         console.log(`Record videos`);
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log(`Enjoy the weekend! 😍`)
//         break;
//     default:
//         console.log(`Not a valid day...`)
// }


// const age = 23;
// age >= 18 ? console.log("I'm old enough to party!🎉") :
//     console.log("I prefer water instead...")

// const drink = age >= 18 ? 'party!' : 'sleep!';
// console.log(drink)

let bill = 500
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20
console.log(`The bill was ${bill}, the tip was ${tip}, and the total was ${bill + tip}`)

