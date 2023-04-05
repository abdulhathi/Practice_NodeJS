const fs = require("fs");

fs.mkdir("./Test", (err) => {
  console.log(err.message);
})