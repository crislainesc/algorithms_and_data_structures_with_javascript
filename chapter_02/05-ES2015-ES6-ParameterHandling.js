// @ts-check
console.log("---------------------------------------");
console.log("🚀 ~ Default Parameter Values");
console.log("---------------------------------------");

function sum(x = 1, y = 2, z = 3) {
  return x + y + z;
}
console.log("🚀 ~ sum", sum(4, 2)); // outputs 9

/* Before ES2015 */
function sum(x, y, z) {
  if (x === undefined) x = 1;
  if (y === undefined) y = 2;
  if (z === undefined) z = 3;
  return x + y + z;
}

function sum() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 0 && arguments[1] !== undefined ? arguments[1] : 2;
  var z = arguments.length > 0 && arguments[2] !== undefined ? arguments[2] : 3;
  return x + y + z;
}

console.log("Spread Operator");
let params = [3, 4, 5];
console.log("🚀 ~ sum ~ params", sum(...params));

/* Before ES2015 */
console.log("🚀 ~ sum ~ params ~ apply", sum.apply(undefined, params));

let numbers = [1, 2, ...params];
console.log("🚀 ~ numbers", numbers);

function restParamaterFunction(x, y, ...a) {
  return (x + y) * a.length;
}

console.log(
  "🚀 ~ restParamaterFunction",
  restParamaterFunction(1, 2, "hello", true, 7)
);

/* Before ES2015 */
function restParamaterFunction(x, y) {
  var a = Array.prototype.slice.call(arguments, 2)
  return (x + y) * a.length;
}

console.log(
  "🚀 ~ restParamaterFunction",
  restParamaterFunction(1, 2, "hello", true, 7)
);
