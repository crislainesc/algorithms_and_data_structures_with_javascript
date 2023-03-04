// @ts-check
console.log("---------------------------------------");
console.log("🚀 ~ Scope of Variables with Let and Const");
console.log("---------------------------------------");

let movie = "Lord of the Rings";

/*
var movie = 'Batman v Superman'
ERROR - Cannot redeclare block-scoped variable 'movie'.
*/

function startWarsFan() {
  const movie = "Stars Wars";
  return movie;
}

function marvelFan() {
  movie = "The Avengers";
  return movie;
}

function blizzardFan() {
  const isFan = true;
  let phase = "Warcraft";
  console.log("🚀 ~ blizzardFan ~ phase - before if: ", phase);

  if (isFan) {
    let phase = "initial text";
    console.log("🚀 ~ blizzardFan ~ phase", phase);

    phase = "For the Horde";
    console.log("🚀 ~ blizzardFan ~ phase - inside if: ", phase);
  }

  phase = "For the Alliance";
  console.log("🚀 ~ blizzardFan ~ phase - after if: ", phase);
}

console.log("🚀 ~ movie", movie);
console.log("🚀 ~ startWarsFan", startWarsFan());
console.log("🚀 ~ marvelFan", marvelFan());
console.log("🚀 ~ movie", movie);
blizzardFan()
