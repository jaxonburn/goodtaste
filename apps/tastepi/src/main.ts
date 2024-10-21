import Fastify from "fastify";
import env from "./env";
import pretty from "pino-pretty";

const envToLogger = {
  development: {
    stream: pretty(),
  },
  production: true,
  testing: false,
};

const fastify = Fastify({
  logger: envToLogger[env.NODE_ENV] ?? true,
});

fastify.get("/", async function handler() {
  return { hello: "world" };
});

async function main() {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

main();
