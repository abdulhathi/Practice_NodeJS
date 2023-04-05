const fs = require("fs");


console.log("Reading file content.");

try {
  let fileContent = fs.readFileSync("readme.txt", "UTF-8")
console.log(fileContent);
} catch (error) {
  console.log(error);
}

