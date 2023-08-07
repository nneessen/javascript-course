'use strict';

const oneWord = (str) => str.replace(/ /g, '').toLowerCase()

function upperFirstWord(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// higher order function == takes in a function
const transformer = (str, fn) => {
    console.log(`Original String: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

transformer('Javascript is the best!', upperFirstWord)
// upperFirstWord and oneWord are callback functions bc we dont call them ourselves, however a function calls the function as an argument
transformer('Javascript is the best!', oneWord)

const high5 = function() {
    console.log('high five');
}
document.body.addEventListener('click', high5)

['Nick', 'Ben', 'Thomas'].forEach(high5);