// Destructure whatever is imported from required file
const { people, ages } = require("./people");

// console.log(people);
// console.log(ages);

// Built into node, importing the os
const os = require("os");

//console.log(os);
console.log(os.platform(), os.homedir());
