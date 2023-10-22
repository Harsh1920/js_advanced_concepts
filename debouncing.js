// let count = 0;

// function showCounter() {
//   count++;
//   console.log({ count });
// }

// function debounceFun(fn, timer) {
//   let id = null;
//   return function () {
//     if (id) {
//     //   console.log("Existing Id: ",id);
//       clearTimeout(id);
//     }
//     id = setTimeout(fn, timer);
//     // console.log("New Id: ",id);
//   };
// }

// let opFun = debounceFun(showCounter, 2000);

// setTimeout(opFun,500); // yes
// setTimeout(opFun,1500); // no
// setTimeout(opFun,2500); // no
// setTimeout(opFun,5500); // yes

// ***************************************************** //
// Real life example //

const inputVal = document.getElementById("text1");
const finalval = document.getElementById("text1-op");

inputVal.addEventListener(
  "keyup",
  debouce(function (e) {
    finalval.innerText = e.target.value;
  }, 2000)
);

function debouce(fx, timer) {
  let id = null;
  return function (x) {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(()=>{
      fx(x);
      id = null;
    },timer);
  };
}
