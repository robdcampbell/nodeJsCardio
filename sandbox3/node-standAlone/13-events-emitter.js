const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`Data Received, user: ${name} with id: ${id}`);
});
customEmitter.on("response", () => {
  console.log(`Some other logic`);
});

customEmitter.emit("response", "Rob", 32);
