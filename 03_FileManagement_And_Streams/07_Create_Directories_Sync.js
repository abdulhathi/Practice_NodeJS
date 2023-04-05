const fs = require("fs");

try {
  fs.mkdirSync("./Test");
} catch (error) {
  console.log(error.message);
}