import pixartResolver from "./PixArt.js";
import usersResolver from "./Users.js";

const resolvers = {
  Query: {
    ...pixartResolver.Query,
  },
  Mutation: {
    ...pixartResolver.Mutation,
  },
};

export default resolvers;
