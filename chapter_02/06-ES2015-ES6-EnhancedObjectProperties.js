// @ts-check
console.log("---------------------------------------");
console.log("🚀 ~ Enhanced Object Properties");
console.log("---------------------------------------");

console.log("Array Destructuring");
let [a, b] = ["a", "b"];
console.log("🚀 ~ a", a);
console.log("🚀 ~ b", b);

/*
Code above is the same as
let x = 'a';
let y = 'b';
*/

console.log("Swap");
[a, b] = [b, a];
console.log("🚀 ~ a", a);
console.log("🚀 ~ b", b);

/*
Code above is the same as
var tem = x;
x = y;
y = temp;
*/

console.log("Property Shorthand");
let [x, y] = ["a", "b"];
let obj = { x, y };
console.log("🚀 ~ obj", obj); // { x: 'a', y: 'b' }
/*
Code above is the same as
var x = 'a';
var y = 'b';
var obj = { x: x, y: y };
console.log("🚀 ~ obj", obj); // { x: 'a', y: 'b' }
*/

console.log("Shorthand method names");
const helloObj = {
  name: "abcdef",
  printHello() {
    console.log("Hello");
  },
};
console.log("🚀 ~ helloObj", helloObj.printHello());
/*
Code above is the same as
var helloObj = {
  name: 'abcdef',
  printHello: function printHello() {
    console.log('Hello')
  }
}
console.log("🚀 ~ helloObj", helloObj.printHello());
*/
