import fastify from "fastify"

// create fastify server
const server = fastify({
  logger: true,
});

// create ping route
server.get("/ping", async (request, reply) => {
  request.log.info("ping request"); 
  return "pong";
});

// listen on port 8080
server.listen(8080, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`server listening on ${address}`);
});