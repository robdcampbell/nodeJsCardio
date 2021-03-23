//built in module, OS
const os = require("os");

// info about current user
const user = os.userInfo();
// Method returns the system uptime in seconds
const timeCompOn = os.uptime();
// console.log(`The System Uptime is: ${timeCompOn} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
