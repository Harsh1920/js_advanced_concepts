# JavaScript Advanced Concept Notes
## 1. Closures

A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.


```js
function numberGenerator() {
  var num = 1;
  function checkNumber() { 
    console.log(num);
  }
  num++;
  return checkNumber;
}

var number = numberGenerator();
number(); // 2
```