// let a = 100;
// let b = 0;

// {
//   let a = 2;
//   let c = 0;
//   console.log(a);
// }

// {
//   let a = 3;
//   let c = 0;
//   console.log(a);
// }

// console.log(a);

// Learning...

// let creates a block scope. Global variable can be access from
// blocks but block variable can't be aceess on globel.

// Temporal Deadzone:-
// the area in which a variable is not accessible.

// Example: 1

let a = 4;

{
    console.log(a);
    let a = 5;
  // accessing 'a' variable before initialization
}

// Example: 2

// {
//   const say = () => {
//     console.log(msg);
//   };

//   say();
//   let msg = "Helloo";
// }

// Variable Shadowing...

// let x = 0; // Shadowed Variable

// {
//     let x = 1;
//     console.log(x);
// }

// var x = 1;
// var x = 2; // Valid

// console.log(y);
// var y = 3; // valid but gives undefiend

// z = 4;
// console.log(z);
// var z;

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// prints 0,1,2,3,4

// for (var i = 0; i < 5; i++) {
//     setTimeout(() => console.log(i), 1000);
// }

// prints 5,5,5,5,5

// let fname = "john";

// this is called function declation
// function sayHi() {    
//   let greet = "hi";
//   console.log(fname);
// }

// sayHi();

// sayHello();

// this is called as fuction expression
// var sayHello = function () {
//   console.log(sayHello);
// };


// console.log(nama);
// nama = 5;
// var nama;
