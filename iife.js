// IIFE = Immediately Invoking Function Expression

// (function () {
//   var x = 5; // Now here is var protected.
//   console.log(x);
// })();

// IIFE used to procted var earlier. Because it has function scope.

// (function (a) {
//   var x = a;
// })(5);

// console.log(x); // Gives an error that x is not defined
