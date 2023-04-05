const fs = require("fs");

fs.rmdir("./Moved", (err) => {
  if (err) {
    throw err;
  }
})