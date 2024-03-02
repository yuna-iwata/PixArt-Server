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
        async createPixArt(_, { pixartInput: { title } }, contextValue) {
            console.log(contextValue);
            const res = await new PixArt({ title }).save();
            return res._id;
        },
    },
};
export default pixartResolver;
