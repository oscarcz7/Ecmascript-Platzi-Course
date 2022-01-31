// default params
//previous version
function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 24;
  var country = country || "ecuador";
  console.log(name, age, country);
}

// es6
function newFunction2(name = "oscar", age = 24, country = "ecuador") {
  console.log(name, age, country);
}

newFunction2("daniel", 25, "Mexico");
newFunction2();

// template literals
//old version
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// es6 multiline
let lorem2 = `another epic phrase 
here is another epic phrase`;
console.log(lorem2);

let person = {
  name: "Oscar",
  age: 24,
  country: "ecuador",
};

//old versions
console.log(person.name, person.age);

// es6 destructuring objects
let { name, age, country } = person;
console.log(age);

let team1 = ["oscar", "daniel", "james"];
let team2 = ["oscar2", "daniel2", "james2"];
//es6 spreed operator joining or append arrays
let education = ["David", ...team1, ...team2];
console.log(education);

let name = "oscar";
let secondary = "eduardo";
// old version
obj = { name: name, secondary: secondary };
// es6 object creation
obj2 = { name, secondary };
console.log(obj2);

const names = [
  { age: 24, year: 2022, country: "ecuador" },
  { age: 25, year: 2022, country: "colombia" },
];
// function old version
let listData = names.map(function (item) {
  console.log(item.age);
});
// es6 arrow function
let listData2 = names.map((item) => console.log(item.name));
const square = (num) => num * num;

// es6 class
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  // methods
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}
const calc = new calculator();
console.log(calc.sum(1, 2));

// es6 modules
import { hello } from "./module.js";
hello();


// es6 generator
function* hello() {
    if(true){
        yield 'Hello, '; // catch data 
    }
    if(true){
        yield 'World!'
    }
}
const generatorHello = hello();
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)