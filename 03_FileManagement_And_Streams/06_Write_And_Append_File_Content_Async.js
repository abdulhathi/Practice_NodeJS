const fs = require("fs");

fs.writeFile("test.txt", "text content", (err) => {
  if (err) {
    throw err;
  }
  fs.appendFileSync("test.txt", "\n\n ### Content appended");
  console.log("File create / append completed.");
})