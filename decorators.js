"use strict";

function heavy(x) {
  return x + ":heavy";
}

function memoizer(fx) {
  let map = new Map(); // Hashmap

  return function (x) {
    if (map.has(x)) {
      //   console.log("if calling");
      return map.get(x);
    } else {
      //   console.log("else calling");
      let result = fx(x);
      map.set(x, result);
      return result;
    }
  };
}

let memoizedFunction = memoizer(heavy);
// memoizedFunction(15);
// memoizedFunction(5);
// memoizedFunction(15);

// A Decorator function is the function which take function as
// a input and return another function on output without
// modifying original function.

// ****************************************************** //
// call, apply and bind methods

// call

let person = {
  name: "Harsh",
  age: "26",
  location: "Sargasan, Gandhinagar",
};

function checkName() {
  return this.name;
//   return !!this.name; // it converts output into boolean
}
// It doesn't have the access of person properties name
// Gives undefined or error on strict mode

// person.check = checkName;

// Now we can access it.
// console.log(person.check());

// If we want to do it without adding new properties..
// We can apply call method on function

// checkName.call(person);
// console.log(checkName.call(person));

// We can pass args like this...
// checkName.call(person,2,3);

// We can also use apply if we want to pass
// args in array formate this...
// checkName.call(person,[1,2,3]);

// bind()

// If we don't want to execute function immediately and run
// later on somewhere else then bind it's good option.
// We can bind the fucntion and it return a function which runs on the reference fo that context

let newBindFunction = checkName.bind(person);
console.log(newBindFunction());