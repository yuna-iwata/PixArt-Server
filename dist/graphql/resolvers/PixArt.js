import PixArt from "../../models/PixArt.js";
const pixartResolver = {
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
export default pixartResolver;
