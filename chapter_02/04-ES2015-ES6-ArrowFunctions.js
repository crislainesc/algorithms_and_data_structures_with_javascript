// @ts-check
console.log("---------------------------------------");
console.log("🚀 ~ Arrow Functions");
console.log("---------------------------------------");

var circleAreaES5 = function circleArea(r) {
  var PI = 3.14;
  var area = PI * r * r;
  return area;
};

console.log("🚀 ~ circleAreaES5", circleAreaES5(2));

const circleArea = (r) => {
  const PI = 3.14;
  const area = PI * r * r;
  return area;
};

console.log("🚀 ~ circleArea", circleArea(2));

const circleArea2 = (r) => 3.14 * r * r;

console.log("🚀 ~ circleArea2", circleArea2());

const hello = () => console.log("Hello!");
hello();
