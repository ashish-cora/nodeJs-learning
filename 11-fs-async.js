const { log } = require("console");
const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./path/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(error);
    return;
  }

  const first = result;
  readFile("./path/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(error);
      return;
    }
    const second = result;
    writeFile(
      "./path/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(error);
          return;
        }
        console.log("done wit this  tassk");
      }
    );
  });
});
console.log("strtign next task");
