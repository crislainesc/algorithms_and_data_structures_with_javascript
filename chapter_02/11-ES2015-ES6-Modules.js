// @ts-check
console.log("---------------------------------------");
console.log("🚀 ~ Modules");
console.log("---------------------------------------");

// import { circleArea, squareArea } from "./11-ES2015-ES6-Modules-CalArea";
// console.log("🚀 ~ circleArea:", circleArea(2));
// console.log("🚀 ~ squareArea:", squareArea(2));

/* Different way of importing the module  */
// import * as area from './11-ES2015-ES6-Modules-CalArea';
// import Book from './07-ES2015-ES6-Classes';

import * as area from "./src/11-CalcArea.js"; // we need the .js to run this code in the browser
import Book from "./src/11-Book.js";

console.log("🚀 ~ area.circle:", area.circle(2));
console.log("🚀 ~ area.square:", area.square(2));

const myBook = new Book("some title");
myBook.printTitle();
