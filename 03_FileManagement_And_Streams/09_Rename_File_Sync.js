const fs = require("fs");

try {
  fs.renameSync("./test.txt", "./test-file.txt");
} catch(err) {
  console.log(err.message);
}