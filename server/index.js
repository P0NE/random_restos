require("./models/resto");
const Hapi = require("hapi");
const mongoose = require("mongoose");
const restosPlugin = require("./routes/restos");

mongoose.promise = global.Promise;

mongoose.connect("mongodb://localhost/randomResto");
mongoose.set("debug", true);

const server = Hapi.server({
  host: "localhost",
  port: process.env.PORT || 3000
});

async function start() {
  try {
    await server.register(restosPlugin);
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("Server running at: ", server.info.uri);
}

start();
