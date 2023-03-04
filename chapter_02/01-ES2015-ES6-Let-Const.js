// @ts-check
console.log("---------------------------------------");
console.log("✨ ~ 02 ◾ ECMAScript and TypeScript Overview");
console.log("---------------------------------------");

console.log("🚀 ~ Let and Const");
console.log("---------------------------------------");

var framework = "Angular";
var framework = "React";

console.log("🚀 ~ framework", framework);

console.log("Let");
let language = "JavaScript!";
/*
let language = 'Ruby' 
ERROR - Cannot redeclare block-scoped variable 'language'
*/
console.log("🚀 ~ language", language);

console.log("Const");
const PI = 3.141593;
/* 
PI = 3.0 - Would throw an error
ERROR - Uncaught TypeError: invalid assignment to const 'PI'
*/
console.log("🚀 ~ PI", PI);

const jsFramework = {
  name: "Angular",
};
console.log("🚀 ~ jsFramework", jsFramework);

jsFramework.name = "React";
console.log("🚀 ~ jsFramework", jsFramework);
/* 
jsFramework = {
  name: "Vue",
}; 
ERROR - Uncaught TypeError: invalid assignment to const 'jsFramework'
*/
