const { log } = require("console");
const os = require("os");

const osInfo = {
  type: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(osInfo);
