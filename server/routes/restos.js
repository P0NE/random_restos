const restosHandler = require("../handlers/restos");

const restosPlugin = {
  name: "restosPlugin",
  async register(server) {
    server.route({
      method: "GET",
      path: "/restos",
      config: {
        cors: true,
        handler: restosHandler.getRestos,
        description: "find all the restos",
        tags: ["api"]
      }
    });

    server.route({
      method: "POST",
      path: "/restos",
      config: {
        cors: true,
        handler: restosHandler.postRestos,
        description: "post a resto",
        tags: ["api"]
      }
    });

    server.route({
      method: "DELETE",
      path: "/restos/{id}",
      config: {
        cors: true,
        handler: restosHandler.deleteRestos,
        description: "delete a resto",
        tags: ["api"]
      }
    });

    server.route({
      method: "GET",
      path: "/restos/random",
      config: {
        cors: true,
        handler: restosHandler.randomRestos,
        description: "return a random resto existing in the database",
        tags: ["api"]
      }
    });
  }
};

module.exports = restosPlugin;
