const { log } = require("console");
const { readFileSync, writeFileSync, read } = require("fs");
console.log("start");

const readFile = readFileSync("./path/first.txt", { encoding: "utf-8" });
const readSecondFile = readFileSync("./path/second.txt", { encoding: "utf-8" });

console.log(readFile, readSecondFile);

writeFileSync("./path/writeTest.txt", `${readFile}`, {
  flag: "a",
});
console.log("done with this task");
console.log("starting the next one");
