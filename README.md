# JavaScript Notes

## Hoisting
- Variables and functions are hoisted, meaning their declarations are moved to the top of the code.
- Example:
  ```javascript
  console.log(a); // undefined
  var a = 12;
  ```
  Declaration moves to the top, but initialization does not.

---

## Types in JavaScript
- **Primitive**: Value is copied.
  ```javascript
  var a = 12;
  var b = a;
  b = b + 2;
  console.log(a); // 12
  console.log(b); // 14
  ```
- **Reference**: Points to the same memory location.
  ```javascript
  var x = [1, 2, 3];
  var y = x;
  y.pop();
  console.log(x); // [1, 2]
  console.log(y); // [1, 2]
  ```

---

## Arrays
- **Declaration**:
  ```javascript
  var arr = [1, 2, 3, 4, 5];
  ```
- Common methods:
  - `push()`: Add value at the end.
  - `pop()`: Remove value from the end.
  - `unshift()`: Add value at the beginning.
  - `shift()`: Remove value from the beginning.
  - `splice(index, count)`: Remove values.

---

## Objects
- Key-value pairs.
  ```javascript
  var obj = {
    name: 'Laksh',
    age: 18
  };
  ```
- Accessing values:
  - Dot notation: `obj.name`
  - Bracket notation: `obj['name']`

---

## ES5 vs ES6
- **ES5**: `var` (function-scoped).
- **ES6**: `let`, `const` (block-scoped).
  ```javascript
  function testVar() {
    for (var i = 0; i < 3; i++) {
      console.log(i);
    }
    console.log(i); // 3
  }
  
  function testLet() {
    for (let i = 0; i < 3; i++) {
      console.log(i);
    }
    console.log(i); // Error
  }
  ```

---

## Spread Operator
- Creates a copy of an array or object.
  ```javascript
  var arrA = [1, 2, 3];
  var arrB = [...arrA];
  arrB.pop();
  console.log(arrA); // [1, 2, 3]
  console.log(arrB); // [1, 2]
  ```

---

## Loops
- **forEach**: Iterates over arrays.
  ```javascript
  array.forEach((val) => console.log(val + 2));
  ```
- **for...in**: Iterates over object properties.
  ```javascript
  for (let key in obj) {
    console.log(key, obj[key]);
  }
  ```

---

## First-Class Functions
- Functions can be treated as variables.
  ```javascript
  function execute(callback) {
    callback();
  }
  execute(() => console.log("Hello"));
  ```

---

## Higher-Order Functions
- Accepts or returns a function.
  ```javascript
  function hof(fn) {
    return function () {
      fn();
    };
  }
  ```

---

## Constructor Function
- Used to create multiple objects with the same properties.
  ```javascript
  function Biscuit(color) {
    this.width = 12;
    this.height = 22;
    this.color = color;
  }
  var bis1 = new Biscuit('brown');
  ```

---

## Immediately Invoked Function Expression (IIFE)
- Executes immediately after being defined.
  ```javascript
  (function () {
    console.log("IIFE executed");
  })();
  ```

---

## Prototype
- Built-in helper properties and methods.
- Prototype inheritance allows objects to inherit properties from other objects.
  ```javascript
  var human = { canWalk: true };
  var coder = { canCode: true };
  coder.__proto__ = human;
  console.log(coder.canWalk); // true
  ```

---

## Call, Apply, Bind
- Changes the `this` context of a function.
  ```javascript
  function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
  }
  var person = { name: 'Laksh' };
  greet.call(person, 'Hello');
  greet.apply(person, ['Hi']);
  var greetPerson = greet.bind(person, 'Hey');
  greetPerson();
  ```

---

## Asynchronous JavaScript
- **Promises**:
  ```javascript
  let promise = new Promise((resolve, reject) => {
    if (true) resolve("Success");
    else reject("Error");
  });
  promise.then(console.log).catch(console.error);
  ```
- **Async/Await**:
  ```javascript
  async function fetchData() {
    let response = await fetch('https://randomuser.me/api/');
    let data = await response.json();
    console.log(data);
  }
  fetchData();
  ```

---

## DOM Manipulation
- **Selection**:
  ```javascript
  var elem = document.querySelector("h1");
  ```
- **Change Content**:
  ```javascript
  elem.innerHTML = "Updated Content";
  ```
- **Change Style**:
  ```javascript
  elem.style.color = "red";
  ```
- **Event Listener**:
  ```javascript
  elem.addEventListener("click", () => {
    console.log("Clicked");
  });
  
