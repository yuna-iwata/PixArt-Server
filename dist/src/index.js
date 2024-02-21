import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { connect } from "mongoose";
import PixArt from "../models/PixArt.js";
const MONGODB = "mongodb+srv://yunaiwata:jrUg7w5ynZPVfX92@cluster0.cvc9tg9.mongodb.net/PixArt?retryWrites=true&w=majority";
const typeDefs = `#graphql
    type PixArt {
        _id: String
        username: String
        title: String
        createdAt: String
    }

    input PixArtInput {
        username: String
        title: String
        createdAt: String
    }

    type Query {
        getPixArt(ID: ID!): PixArt!
        getAllPixArt(limit:Int): [PixArt]
    }

    type Mutation {
        createPixArt(pixartInput: PixArtInput): String!
        updatePixArt(ID: ID!, pixartInput: PixArtInput): String!
        deletePixArt(ID: ID!): String!
    }

`;
const resolvers = {
    Query: {
        async getPixArt(_, { ID }) {
            return await PixArt.findById(ID);
        },
        async getAllPixArt() {
            return await PixArt.find();
        },
    },
    Mutation: {
        async createPixArt(_, { pixartInput: { username, title, createdAt } }) {
            const res = await new PixArt({ username, title, createdAt }).save();
            return res._id;
        },
        async updatePixArt(_, { ID, bookInput: { username, title, createdAt } }) {
            await PixArt.updateOne({ _id: ID }, { $set: { username, title, createdAt } });
            return ID;
        },
        async deletePixArt(_, { ID }) {
            await PixArt.findByIdAndDelete(ID);
            return ID;
        },
    },
};
async function run() {
    await connect(MONGODB);
    const server = new ApolloServer({ typeDefs, resolvers });
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
}
run();
