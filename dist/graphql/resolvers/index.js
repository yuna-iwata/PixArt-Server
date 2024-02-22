import pixartResolver from "./PixArt.js";
import usersResolver from "./Users.js";
const resolvers = {
    Query: {
        ...pixartResolver.Query,
        ...usersResolver.Query,
    },
    Mutation: {
        ...pixartResolver.Mutation,
        ...usersResolver.Mutation,
    },
};
export default resolvers;
