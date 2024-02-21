import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { connect } from "mongoose";
import resolvers from "../graphql/resolvers/index.js";
import typeDefs from "../graphql/typeDefs.js";

const MONGODB =
  "mongodb+srv://yunaiwata:jrUg7w5ynZPVfX92@cluster0.cvc9tg9.mongodb.net/PixArt?retryWrites=true&w=majority";

async function run() {
  await connect(MONGODB);

  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

run();
