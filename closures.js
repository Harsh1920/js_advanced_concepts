// Example : 1

// function createUser(fname){
//     let greeting = "Hi "
//     function greet() {
//         return greeting + fname + ` is created`;
//     }
//     return greet
// }

// let result = createUser('Harsh');

// console.log(result());

// Example : 2

// function initCounter() {
//   let count = 0;

//   return function() {
//     count++;
//   };
// }

// let counter = initCounter();
// console.log(counter());

// Why this gives undefined rather
// it should return in output as '1'

// function init() {
//   let name = "John";

//   function greet() {
//     console.log(name);
//   }
//   return greet;
// }

// let sayHi = init();
// sayHi();

function initCounter() {
  let count = 0;
  return function () {
    count++;
    document.getElementById("btntext").innerText = count;
  };
}

let counter = initCounter();



