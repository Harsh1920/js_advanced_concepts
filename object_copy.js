let addressObject = {
  city: "Delhi",
  state: "Delhi",
};

let person = {
  name: "John",
  address: addressObject,
};

// console.log(person);

// console.log(addressObject);

// Creating shallow copy of this object

let shallowCopy = Object.assign({}, addressObject);
shallowCopy.state = "Gujarat";
// console.log(shallowCopy);

// Another way is Spread Operator

let personshallowCopy = { ...person };
// console.log(personShallowCopy);

// Both referes two different memory location.
// shallow copy creates referecne at one level depth. It doesn't
// create seperate copy for nesting object.
// In other word, it can copy only premitive values.
// Not nonpretive object refernce.

// *************************************************** //

// Creating a copy of person..

let anotherPersonShallowCopy = Object.assign({}, person);
anotherPersonShallowCopy.address.city = "Gujarat";
// console.log(anotherPersonShallowCopy);

// Changed value from both object...!!!!!
// So shallow copy only works for one layer object strucutre...

// *************************************************** //
// Another way is DEEP Copy...

// Converting object into string and then back to object agin..
let deepCopy = JSON.parse(JSON.stringify(person));
// console.log(deepCopy);
// This is deep copy of this object.

// *************************************************** //
// Another way is StructuredClone:
// It's an browser API in modern browser.

let nestedObject = { city: "delhi", state: "delhi" };

let data = {
  name: "John",
  address: nestedObject,
};

// person.me = person

// let newPerson = structuredClone(person);
// console.log(newPerson);

// *************************************************** //
// *************************************************** //
// *************************************************** //

// This Keyword..
// It used mostly on method...

let personalDetails = {
  name: "Harsh",
  age: "26",
  weigh: "88Kg",
  isOverWeight: function () {
    return `My name is ${this.name}. My weight is ${this.weigh} and I am overweight person.`;
  },
};

personalDetails.isOverWeight();

// This keyword is used when we want access the value of same object
// inside the method.

// This doen't work for arrow function. It gives an error.

// Creating an example of a funcion used by two differt object..

function printName() {
  return `Your name is ${this.name}`;
}

let obj1 = {
  name: "Harsh",
};

let obj2 = {
  name: "Jinal",
};

obj1.say = printName;
obj2.say = printName;

console.log(obj1.say()); // Harsh
console.log(obj2.say()); // Jinal

// We are using one single function for two diffent object
// using 'this' keyword, they both calling their
// parent object values
