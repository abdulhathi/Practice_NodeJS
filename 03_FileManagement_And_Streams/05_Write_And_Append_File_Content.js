const fs = require("fs");

const content = `
  This is the file content.
  -------------------------
  Hi,
    How are you. This is Abdul Hathi. 
  Thanks,
  Abdul Hathi
`
const file = fs.writeFileSync("mailContent.txt", content);
console.log(file);

