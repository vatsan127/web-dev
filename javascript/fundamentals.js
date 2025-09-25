/** Data types (string, number, boolean, null, undefined, object)*/
let userName = "John";
const age = 25;
var isStudent = true;

console.log(`Type - ${typeof userName}`);

console.log(`Hello ${userName}, you are ${age} years old. You are ${isStudent ? 'a student' : 'not a student'}`);

/**
 Arithmetic operators (+, -, *, /, %)
 Comparison operators (==, ===, !=, !==, <, >)
 Logical operators (&&, ||, !)
 Assignment operators (=, +=, -=, *=, /=)
 Ternary operator (condition ? true : false)
 */
const age2 = '25';
if (age == age2) { // matches only value and cast the RHS to LHS type
    console.log('Easy matching');
}

if (age === age2) { // Matches even the data type
    console.log('Strict matching');
}

/**
 •	if, else if, else statements
 •	ToDO: switch statements
 •	ToDo: Truthy and falsy values
 */

function gradeCalculator(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else {
        return "F";
    }
}

for (let i = 1; i <= 5; i++) {
    console.log(i);     // Output: 1, 2, 3, 4, 5
}

const fruits = ["apple", "banana", "orange", "grape"];
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

console.log('For in '); // Iterates over enumerable properties (keys) of an object, including array indices.
for (const fruit in fruits) {
    console.log(fruit);
}

console.log('For of '); // Iterates over values of iterable objects (arrays, strings, etc.).
for (const fruit of fruits) {
    console.log(fruit);
}

for (let [index, fruit] of fruits.entries()) {
    console.log(`${index}: ${fruit}`);
}

console.log(`grade ${gradeCalculator(10)}`);

// These are the ONLY falsy values in JavaScript:
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(-0));         // false
console.log(Boolean(0n));         // false (BigInt zero)
console.log(Boolean(""));         // false (empty string)
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

// Truthy, includes:
console.log(Boolean(true));       // true
console.log(Boolean(1));          // true
console.log(Boolean(-1));         // true
console.log(Boolean("hello"));    // true
console.log(Boolean("0"));        // true (string "0" is truthy!)
console.log(Boolean(" "));        // true (space is truthy)
console.log(Boolean([]));         // true (empty array is truthy!)
console.log(Boolean({}));         // true (empty object is truthy!)
console.log(Boolean(function () {
})); // true
console.log(Boolean("false"));    // true (string is truthy)
console.log(Boolean("0"));        // true (string is truthy)
console.log(Boolean([]));         // true (empty array is truthy)
console.log(Boolean({}));         // true (empty object is truthy)