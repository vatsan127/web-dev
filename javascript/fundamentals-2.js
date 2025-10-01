// Arrow Functions

function getRectangleAreaFunc(width, height) {
    return width * height;
}

const getRectangleArea = (width, height) => {
    return width * height;
}

// const getRectangleArea = (width, height) => width * height;

console.log(getRectangleArea(2, 5));
console.log(getRectangleAreaFunc(2, 5));

// -------------------------------------------------------
let name = "test";

const Person = {
    name: "John", regularFunc: function () {
        console.log(this.name);
    }, arrowFunc: () => {
        console.log(this.name);
    }, address: {
        city: "boston", state: "MA"
    }
};

console.log(Person);
Person.regularFunc();
Person.arrowFunc();


// ----------------------------------------------------------

const {name: name1} = Person;
console.log(name1);

const {address: {city}} = Person;
console.log(city);

const arr = ['one', 'two', 'three'];
const [one, ...others] = arr;
console.log(one);
console.log(others);
const nums = arr.map((n, i) => `${i+1} ${n}`);
console.log(nums);


const numbers = [1, 2, 3];
const total = numbers.reduce((total, number) => total + number, 0);
console.log(total);

console.log(Person.street?.no);