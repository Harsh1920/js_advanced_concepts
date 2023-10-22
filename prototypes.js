// Objects have a hidden property called [[Prototype]]
// Objects are chained on prototypical Inheritance.

let girl = {
  wife: "Jinal",
};

let boy = {
  husband: "Harsh",
};

console.log(girl.wife);
// console.log(girls.husband); // This gives undefined
// you can access the properties of 'boy object'
// let's inherit the object

girl.__proto__ = boy;
console.log(girl.husband);
// Now it can access the value...

// Prototype Chaining Examples....

let animal = {
  eats: true,
  walks: function () {
    return "Walks..";
  },
};

let dog = {
  barks: true,
};

let myDog = {
  name: "Bholu",
};

console.log(myDog.name);

myDog.__proto__ = dog;
console.log(myDog.barks);

dog.__proto__ = animal;
console.log(myDog.walks());

// Writing doesn't work only rading work on prototye Inheritance

// Properties of an Object
// 3 criteria to check on every property...

// 1. own or inherited
// 2. enumerable or non-enumerable
// 2. String or Symbol
