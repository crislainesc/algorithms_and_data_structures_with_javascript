// @ts-check
console.log("---------------------------------------");
console.log("🚀 ~ Modules Node");
console.log("---------------------------------------");

const area = require("./lib/11-CalcArea");
const Book = require("./lib/11-Book");

console.log("🚀 ~ area.circle:", area.circle(2));
console.log("🚀 ~ area.square:", area.square(2));


const myBook = new Book("some title");
myBook.printTitle();
