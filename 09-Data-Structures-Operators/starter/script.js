'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// [main, secondarty] = [secondarty, main]
// console.log(main, secondarty)

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);


const arr = [1, 2, ...[3, 4]];

// REST, bc on left side of = sign
const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu] 
// console.log(pizza, risotto, otherFood); 


/* SHORT CIRCUITING */
/* SHORT CIRCUITING */
/* SHORT CIRCUITING */

// if first value is truthy, it will be returned
// else if first value is falsy, second value will be returned
// console.log(3 || 'Nick');
// console.log('' || 'Nick');
// console.log(true || 0);
// console.log(undefined || null);

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// console.log('---- AND ----')
// // will not work if result is 0 bc 0 is falsey, and first value in ternary operator needs to be truthy 

// console.log(0 && 'Nick');
// // if the first value is false, the entire operation will be false so there is no need to look at any other operants
// console.log(7 && 'Nick');
// console.log('Hello' && 23 && null && 'Nick');

// if( restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'pepperoni')
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'pineapple')


const rest1 = {
  name: 'Capri',
  numGuests: 20
};

const rest2 = {
  name: 'La Piaza',
  owner: 'Nick Neessen'
}

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
// if first value is truthy, it will be immediately returned. 2nd value will not be evaluated
console.log(rest1);
console.log(rest2);
