// When you want to allow 1 execution of function within a period
// of time. For example.. you are scrolling fast but only
// one scroll per 100 millisecond is considered.

// Throttle..

// Realtime Example..

function sayHi() {
  console.log("Hello, I am here..");
}

function throttle(fn, timer) {
  let id = null;
  let args = [];
  return function (x) {
    args[0] = x;
    if (!id) {
      id = setTimeout(() => {
        fn(args[0]);
        id = null;
      }, timer);
    }
  };
}

document.addEventListener("scroll", throttle(sayHi, 2000));

// ********************************************************** //

let counter = 0;

function showCounter(x) {
  counter++;
  console.log({ counter, x });
}

function throttleLogic(fn, timer) {
  let id = null;
  let args = [];
  return function (x) {
    if (!id) {
      id = setTimeout(() => {
        fn(args[args.length - 1]);
        id = null;
      }, timer);
    }
    args.push(x);
  };
}

let throttledfunction = throttleLogic(showCounter, 2000);
setTimeout(throttledfunction, 1000, "1");
setTimeout(throttledfunction, 2200, "2"); 
setTimeout(throttledfunction, 2500, "3");
setTimeout(throttledfunction, 2800, "4");
setTimeout(throttledfunction, 2900, "5");
setTimeout(throttledfunction, 3100, "6"); // yes
setTimeout(throttledfunction, 5500, "7"); // yes