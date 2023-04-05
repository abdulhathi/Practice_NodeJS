// Path - Module
const path = require("path");

console.log(path.basename(__filename));
console.log(path.join(__dirname, "test", "abdul", "dir"));

// Util Module
const util = require("util");

util.log(path.basename(__filename));
util.log(path.join(__dirname, "test", "abdul", "dir"));

// V8 Module
const v8 = require("v8");
util.log(v8.getHeapSpaceStatistics());