/// Currying is na pattern. It uses fundamental concept of
// Scope and clousers.

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// let result = sum(4)(3)(2);
// console.log(result);

// This called curring. A function inside
// another function inside another function returns something.
// this weird syntax is called a currying.

// We can also write on quite leaner way.

// let op = a => b => c => a+b+c;

// console.log(op(2)(2)(4));

//**************** Best Example of creating log ****************/

let log = (time) => (type) => (msg) =>
  `At ${time.toLocaleString()} => Severity ${type} => ${msg}`;
console.log(log(new Date())("Error")("Unexpected token authorized"));

// let create a function on which date is predefiend

let logNow = log(new Date());
// Now you just need to pass only params..
console.log(logNow("Warning")("Server is down..")); // No need to pass data

// lets create one more, on which I need to pass only message

let logMessage = log(new Date())("Error");
console.log(logMessage("Too much traffic on load balancer 1"));
// No need to pass data and error type...

// Thats how we can create so many useful fuction variation.
