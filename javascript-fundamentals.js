// -----------------------------------------------
// 1. DATA TYPES AND VARIABLES
// -----------------------------------------------
let userName = "John";           // string (mutable)
const age = 25;                  // number (immutable)
var isStudent = true;            // boolean (function-scoped)

console.log(`Type - ${typeof userName}`);
console.log(`Hello ${userName}, you are ${age} years old. You are ${isStudent ? 'a student' : 'not a student'}`);

// -----------------------------------------------
// 2. OPERATORS
// -----------------------------------------------

// Arithmetic operators (+, -, *, /, %)
// Comparison operators (==, ===, !=, !==, <, >)
// Logical operators (&&, ||, !)
// Assignment operators (=, +=, -=, *=, /=)
// Ternary operator (condition ? true : false)

const age2 = '25';

// Loose equality (type coercion)
if (age == age2) {
    console.log('Easy matching - converts types');
}

// Strict equality (no type coercion)
if (age === age2) {
    console.log('Strict matching - same type and value');
}

// -----------------------------------------------
// 3. TRUTHY AND FALSY VALUES
// -----------------------------------------------

// FALSY values (only 8 in JavaScript):
console.log('=== FALSY VALUES ===');
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(-0));         // false
console.log(Boolean(0n));         // false (BigInt zero)
console.log(Boolean(""));         // false (empty string)
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

// TRUTHY values (everything else):
console.log('=== TRUTHY VALUES ===');
console.log(Boolean(true));       // true
console.log(Boolean(1));          // true
console.log(Boolean(-1));         // true
console.log(Boolean("hello"));    // true
console.log(Boolean("0"));        // true (string "0" is truthy!)
console.log(Boolean(" "));        // true (space is truthy)
console.log(Boolean([]));         // true (empty array is truthy!)
console.log(Boolean({}));         // true (empty object is truthy!)
console.log(Boolean("false"));    // true (string is truthy)

// -----------------------------------------------
// 4. CONDITIONAL STATEMENTS
// -----------------------------------------------

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

console.log(`Grade: ${gradeCalculator(85)}`);

// -----------------------------------------------
// 5. LOOPS
// -----------------------------------------------

// Traditional for loop
console.log('=== TRADITIONAL FOR LOOP ===');
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

const fruits = ["apple", "banana", "orange", "grape"];

// For loop with arrays
console.log('=== FOR LOOP WITH ARRAYS ===');
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// For-in loop (iterates over keys/indices)
console.log('=== FOR-IN LOOP (keys/indices) ===');
for (const index in fruits) {
    console.log(`Index: ${index}, Value: ${fruits[index]}`);
}

// For-of loop (iterates over values)
console.log('=== FOR-OF LOOP (values) ===');
for (const fruit of fruits) {
    console.log(`Value: ${fruit}`);
}

// For-of with entries (index and value)
console.log('=== FOR-OF WITH ENTRIES ===');
for (let [index, fruit] of fruits.entries()) {
    console.log(`${index}: ${fruit}`);
}

// -----------------------------------------------
// 6. FUNCTIONS
// -----------------------------------------------

// Regular function declaration
function getRectangleAreaFunc(width, height) {
    return width * height;
}

// Arrow function (ES6)
const getRectangleArea = (width, height) => {
    return width * height;
};

// Arrow function (concise syntax)
const getRectangleAreaConcise = (width, height) => (width * height);

console.log('=== FUNCTION EXAMPLES ===');
console.log(`Regular function: ${getRectangleAreaFunc(2, 5)}`);
console.log(`Arrow function: ${getRectangleArea(2, 5)}`);
console.log(`Concise arrow: ${getRectangleAreaConcise(2, 5)}`);

// -----------------------------------------------
// 7. OBJECTS AND 'THIS' BEHAVIOR
// -----------------------------------------------

let globalName = "Global Context";

const Person = {
    name: "John",

    // Regular function - 'this' refers to the object
    regularFunc: function () {
        console.log(`Regular function this.name: ${this.name}`);
    },

    // Arrow function - 'this' refers to global context
    arrowFunc: () => {
        console.log(`Arrow function this.name: ${this.name}`); // undefined or global
    },

    address: {
        city: "Boston",
        state: "MA"
    }
};

console.log('=== OBJECT AND THIS BEHAVIOR ===');
console.log(Person);
Person.regularFunc();  // 'this' = Person object
Person.arrowFunc();    // 'this' = global context

// -----------------------------------------------
// 8. DESTRUCTURING
// -----------------------------------------------

console.log('=== DESTRUCTURING EXAMPLES ===');

// Object destructuring with renaming
const {name: personName} = Person;
console.log(`Destructured name: ${personName}`);

// Nested object destructuring
const {address: {city}} = Person;
console.log(`Destructured city: ${city}`);

// Array destructuring with rest operator
const arr = ['one', 'two', 'three', 'four'];
const [first, second, ...remaining] = arr;
console.log(`First: ${first}`);
console.log(`Second: ${second}`);
console.log(`Remaining:`, remaining);

// -----------------------------------------------
// 9. ARRAY METHODS
// -----------------------------------------------

console.log('=== ARRAY METHODS ===');

// Map method - transforms each element
const numberedFruits = fruits.map((fruit, index) => {
    return `${index + 1}. ${fruit}`;
});
console.log('Mapped fruits:', numberedFruits);

// Reduce method - accumulates values
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(`Sum of numbers: ${total}`);

// -----------------------------------------------
// 10. OPTIONAL CHAINING (ES2020)
// -----------------------------------------------

console.log('=== OPTIONAL CHAINING ===');
console.log(`Safe property access: ${Person.address?.street?.number}`); // undefined (no error)
console.log(`Existing property: ${Person.address?.city}`); // "Boston"

// -----------------------------------------------
// 11. SHORT CIRCUITING
// -----------------------------------------------

console.log('=== SHORT CIRCUITING ===');

// OR operator (||) - returns first truthy value or last value

// Found a truthy value - returns it immediately
const result1 = 'Hello' || 'World';
console.log(result1); // 'Hello' (first truthy value)

// All values are falsy - returns the LAST value
const result2 = false || 0 || null || undefined;
console.log(result2); // undefined (last value, even though it's falsy)

// Another example with all falsy values
const result3 = '' || 0 || false;
console.log(result3); // false (last value)


// AND operator (&&) - returns first falsy value or last value
// Found a falsy value - returns it immediately
const result1 = true && 0 && 'Hello';
console.log(result1); // 0 (first falsy value)

// All values are truthy - returns the LAST value
const result2 = 'Hello' && 'World' && 'Goodbye';
console.log(result2); // 'Goodbye' (last value)

// Another example with all truthy values
const result3 = 5 && 'test' && true;
console.log(result3); // true (last value)
