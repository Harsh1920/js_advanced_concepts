let person = {
  0: "john",
  sayHi: () => {
    return "hi " + this.name;
  },
};

person[0];

// Here '0' is a key. It is convertd into the string by javascript,
// Symbol is the data type in Jacascript.
// Object can only have two type of properties: String or Symbol
// If you put any other data type, JS will convert to String

// Symbol is used for making hidden properties.(Eg; Library)

const id = Symbol("id"); // 'id' is descriptor

let personData = {
  name: "John",
  [id]: 1, // '[]' means check the value, doesn't considered by default string
};

console.log(personData[id]);
console.log(personData);
