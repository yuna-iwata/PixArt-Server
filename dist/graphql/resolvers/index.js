import pixartResolver from "./PixArt.js";
const resolvers = {
    Query: {
        ...pixartResolver.Query,
    },
    Mutation: {
        ...pixartResolver.Mutation,
    },
};
export default resolvers;
