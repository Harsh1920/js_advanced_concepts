# JavaScript Advanced Concept Notes

## 1. Closures

A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables.

**Basic Example :**

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
number(); 
```

**Real Life Example :**

``` js
function counterFun() {
    console.log('clicked!');
    let count = 0;
    return function() {
        count++;
        document.getElementById("counter-val").innerText = count;
    }
}

let counter = counterFun();
console.log(counter());
```
HTML Code :

```html
<button onclick="counter()">Click me</button>
<p id="counter-val">0</p>
```


## 2. Debouncing

Debouncing is a programming technique that limits the frequency of function calls. It is often used to improve browser performance by preventing a function from being called too frequently.

**Real Life Example :**
> A real life example of closuer using Debouncing

```js
function triggerAlertMain() {
  let id = null;

  return function () {
    if (id) {
      clearTimeout(id);
      console.log("ID Cleared!");
    }
    id = setTimeout(() => {
      alert("I am triggered!");
    }, 2000);
    console.log(id);
  };
}
```

## 3. Throttling

Throttling is a technique that limits the number of times a function can be called over a given period of time. It is often used to control the frequency at which an event is triggered or a request is sent, in order to prevent overwhelming a system or degrading performance.

``` js
let count = 0;
let isScroll = true;
function displayCounter() {
  if(isScroll === true){
    count++;
    document.getElementById('counter').innerText = `Counter value is: ${count}`;
    isScroll = false;
    setTimeout(()=>{
      isScroll=true;
    },1000)
  }
}
```
## Difference between Debouncing and Throttling?
> Debouncing waits for a certain time before invoking the function again. Throttling limits the number of times the function can be called over a certain period.

**=> Check sandbox for more advance example:** 


## 4. Currying

A function inside another function inside another function returns something.  Currying is a pattern. It uses fundamental concept of Scope and clousers.

```js
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

let result = sum(4)(3)(2);
console.log(result); // 9
```

## 4. Call, Apply and Bind

1) call()
=> The call() method in JavaScript is a predefined method that can be used to invoke another function with an owner object as an argument.

```js
let person = {
  name: "Harsh",
  age: '26',
  location: "Sargasan, Gandhinagar"
}

function checkName(){
  return this.name;
}

console.log(checkName()); // This gives an error "cannot read properties of undefined (reading 'name')"

// To handle this type of scenario, we can add extra properties to object like this..

person.check = checkName;
console.log(person.check()); // Harsh

// Or we can use call inbuilt method in JS to inform the function that on which context it should run. Like this..

let result = checkName.call(person);
console.log(result); // Harsh

```

2. apply()
=> The apply() method is similar to the call() method except that it accepts the arguments of the function as an array instead of individual arguments.

```js
function.apply(thisValue, [arguments])
```

```js
const numbers = [1, 2, 3];

const sum = function(a, b, c) {
  return a + b + c;
};

console.log(sum.apply(null, numbers)); // 6
```


3. bind()
=> If we don't want to execute function immediately and run later on somewhere else then bind it's good option. We can bind the fucntion and it return a function which runs on the reference to that context.

```js
let newBindFunction = checkName.bind(person); //returns a function
console.log("Bind result:",newBindFunction());
```

> When to use bind () call () and apply () in JavaScript?

+ Call : binds the this value, invokes the function, and allows you to pass a list of arguments.

+ Apply : binds the this value, invokes the function, and allows you to pass arguments as an array.

+ Bind : binds the this value, returns a new function, and allows you to pass in a list of arguments.

## 5. Shallow Copy & Deep Copy

Shallow copy means that only the first level of the object is copied. Deeper levels are referenced. Deep copy means that all levels of the object are copied. This is a true copy of the object.

> The difference between a shallow copy and a deep copy is that a shallow copy only copies the top-level entries of an object, while a deep copy copies all levels of the object

```js
let addressObject = {
  city: "Ahmedabad",
  state: "Gujarat",
};

let person = {
  name: "John",
  address: addressObject,
};

// Two ways to make shallow copy:

1> let shallowCopy = Object.assign({},addressObject);
2> let shallowCopySpread = {...person};

// Two ways to make deep copy:

1> let deepCopy = JSON.parse(JSON.stringify(person));
// Convert object into string and then back to object again..

2> let newPerson = structuredClone(person);
// It's an browser API in modern browser.

```