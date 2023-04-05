const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
  console.log(`${user} : ${message}`);
})

emitter.emit("customEvent", "Hi how are you", "Abdul");
emitter.emit("customEvent", "This Node js", "Computer");

process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  if (input === "exit") {
    emitter.emit("customEvent", "Thanks good by !", "Process");
    process.exit();
  }
  emitter.emit("customEvent",input,"Terminal");
});

