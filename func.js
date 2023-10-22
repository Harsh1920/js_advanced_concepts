// Functions are special kind of objects in JS.

function sayHi(name, age) {
  return name;
}

sayHi("Harsh");
console.log(sayHi.name); //returns the function name
console.log(sayHi.length); // Gives number of total args

// You can add your custom properties too.
sayHi.weight = "88KG";
console.log(sayHi.weight);

//****************************************************/

// Function Declaration are hoisted by default.

hello(); // this works, doesn't give error.
function hello() {}

// This is function declaration. But assign it to another
// variable called functional expression. Like this....

// sayHello();
let sayHello = function () {};

// This gives error cause it doesn't hoisted.

//****************************************************/

function Person(name) {
  this.name = name;
}

const p = new Person("Harsh");
console.log(p);


// Named function expression
     
