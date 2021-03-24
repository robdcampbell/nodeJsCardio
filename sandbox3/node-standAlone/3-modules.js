// function greeting(name) {
//   console.log(`Hello ${name}!`);
// }

// const john = "john";
// const jane = "jane";

// // console.log(module);

// module.exports = { john, jane, greeting };

// CommonJS, every file is module (by default)
// Modules - Encapulated Code (only share a minimum)

const { greeting } = require("./3-modules.js");
const data = require("./6-alternativeExport");
require("./7-mind-grenade");

const amount = 12;
// greeting("Rob");
console.log(data);
