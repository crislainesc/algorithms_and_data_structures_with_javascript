// @ts-check
console.log("---------------------------------------");
console.log("🚀 ~ Getters e Setters");
console.log("---------------------------------------");

/* ES2015 */
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

let lotrChar = new Person("Frodo");
console.log("🚀 ~ lotrChar ~ name", lotrChar.name);
lotrChar.name = "Gandalf";
console.log("🚀 ~ lotrChar ~ name", lotrChar.name);
lotrChar._name = "Sam";
console.log("🚀 ~ lotrChar ~ name", lotrChar.name);

// using symbols for private attributes
var _name = Symbol();

class Person2 {
  constructor(name) {
    this[_name] = name;
  }

  get name() {
    return this[_name];
  }

  set name(value) {
    this[_name] = value;
  }
}

let lotrChar2 = new Person2("Frodo");
console.log("🚀 ~ lotrChar2 ~ name", lotrChar2.name);
lotrChar2.name = "Gandalf";
console.log("🚀 ~ lotrChar2 ~ name", lotrChar2.name);
console.log(
  "🚀 ~ Object.getOwnPropertySymbols",
  Object.getOwnPropertySymbols(lotrChar2)
);
