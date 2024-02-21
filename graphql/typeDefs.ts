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

export default typeDefs;
