const path = require("path");

console.log(path.sep);

const pathJoin = path.join("/path", "sub-path", "text.txt");

console.log("pathjoin is ", pathJoin);

const basePath = path.basename(pathJoin);
console.log(basePath);

const absolutePath = path.resolve(__dirname, "path", "sub-path", "text.txt");

console.log("absolutePath==", absolutePath);
