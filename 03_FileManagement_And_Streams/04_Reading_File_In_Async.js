const fs = require("fs");

fs.readFile("readme.txt", "utf-8", (err, fileContent) => {
  console.log(fileContent);
});

console.log("Reading file content async.");