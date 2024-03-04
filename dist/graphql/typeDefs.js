const typeDefs = `#graphql
    type PixArt {
        _id: String
        username: String
        title: String
        createdAt: String
    }

    type User{
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
    }

    input RegisterInput{
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }

    input PixArtInput {
        title: String
    }

    type Query {
        getPixArt(ID: ID!): PixArt!
        getAllPixArt(limit:Int): [PixArt]
    }

    type Mutation {
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
        createPixArt(pixartInput: PixArtInput): PixArt!
        updatePixArt(ID: ID!, pixartInput: PixArtInput): PixArt!
        deletePixArt(ID: ID!): String!
    }

`;
export default typeDefs;
