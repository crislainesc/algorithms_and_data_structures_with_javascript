let myName = "Packt";

// myName = 10;
// Type 'number' is not assignable to type 'string'.ts(2322)

let age = 20; // number
let existsFlag = true; // boolean
let language = "JavaScript"; // string

let favoriteLanguage: string;
let langs = ["JavaScript", "Ruby", "Python"];
favoriteLanguage = langs[0];

interface Person {
  name: string;
  age: number;
}

function printName(person: Person) {
  console.log("🚀 ~ person.name:", person.name);
}

const john = { name: "John", age: 21 };
const mary = { name: "Mary", age: 21, phone: "123-45678" };
printName(john);
printName(mary);

interface Comparable<T> {
  compareTo(b: T): number;
}

class MyObject implements Comparable<MyObject> {
  age: number;

  compareTo(b: MyObject): number {
    if (this.age === b.age) {
      return 0;
    }
    return this.age > b.age ? 1 : -1;
  }
}

function compareTwoObjects(a: MyObject, b: MyObject) {
  console.log("🚀 ~ a.compareTo:", a.compareTo(b));
  console.log("🚀 ~ b.compareTo:", b.compareTo(a));
}
