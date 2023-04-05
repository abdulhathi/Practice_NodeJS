const fs = require("fs");

fs.rename("./readme.txt", "./Moved/readme.txt", (err) => {
  if (err) {
    throw err;
  }
  console.log("File moved successfully using rename option");
})