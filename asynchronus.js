function sum(a, b) {
  if (a > 0 && b > 0) {
    return [null, a + b];
  } else {
    return ["Input is not valid!", null];
  }
}

let sumFn = (a, b, cb) => setTimeout(() => cb(...sum(a, b)), 2000);

sumFn(3, 2, function (error, result) {
  if (!error) {
    //   console.log({ result });
  } else {
    //   console.log({ error });
  }
  sumFn(10, result, function (error, result) {
    sumFn(10, result, function (error, result) {
      //   console.log({ "Final result is: ": result });
    });
  });
});

// This is piramid of DOM, also know as a callback hell.

// ******************* Promise ********************** //

// Promise is used to ignore callback hell.

// Promise has three state Pending, Fullfiled and Rejected...

// let promiseData = new Promise((resolve, reject) => {
//   //async task goes here...
//   if (resolve) {
//     //if async task is successful
//     resolve(data);
//   } else {
//     //else task is having error
//     reject(error);
//   }
// });

// .then() is the listener of the promise

// promiseData
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// This pattern is also knows as a Provider and Consumer Pattern

// ********************************************************************************************* //
// Promise version of above example

function add(a, b) {
  if (a > 0 && b > 0) {
    return [null, a + b];
  } else {
    return ["Input is not valid", null];
  }
}

let promiseFn = (a, b) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      let op = add(a, b);
      if (op[0]) {
        reject(op[0]);
      } else {
        resolve(op[1]);
      }
    }, 3000);
  });

promiseFn(3, 5)
  .then((result) => {
    console.log({ result });
    return promiseFn(result, 20);
  })
  .then((result) => {
    console.log({ result });
    return promiseFn(result, 40);
  })
  .then((result) => {
    console.log({ result });
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("I call everytime at the end of the chain"));

// Promise APi => .all(), .allSettled(), race(), any(), resolve() and reject()

//************************************ Async and Await ***********************************/

async function sayHi() {
  return "Hi";
}
sayHi();
