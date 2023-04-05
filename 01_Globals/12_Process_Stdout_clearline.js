process.stdout.write("hello");
process.stdout.clearLine();
process.stdout.cursorTo(0);


let waitInterval = 0
setInterval(() => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Inprogress --- ${waitInterval}`)
  waitInterval += 1
}, 1000);