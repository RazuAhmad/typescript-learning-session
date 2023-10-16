"use strict";
const totalCalculation = (a, b, c = 'true') => {
    return a + b;
};
console.log(totalCalculation(34, 23, false));
const b = "Razu";
const personalDetails = {
    name: 'razu',
    occupation: 'farmer',
    salary: 230
};
const userDetails = (id, user) => {
    console.log(id, user);
};
userDetails(349, { name: 'abdur rahman', age: 34 });
// function signatures:::
let myFunc = (x, y) => {
    return x + y;
};
let add;
add = (a, b) => {
    return a + b;
};
let calculation;
calculation = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
};
calculation(23, 34, 'add');
let userDetailsNow;
let myFunction;
