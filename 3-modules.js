// commonJS, every file is module (by default)
// modules - encapsulated code (only share minimum)

const { johnny, depp } = require("./4-names");
const callName = require("./5-utils");
const data = require("./6-alternate-exports");

require("./7-mind-grenade");

// callName("pirate");
// callName(johnny);
// callName(depp);
