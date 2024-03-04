import { AuthenticationError } from "apollo-server";
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
            // console.log(contextValue);
            // const user = checkAuth(contextValue);
            // const newPixArt = await new PixArt({
            //   title,
            //   user: user.id,
            //   username: user.username,
            //   createdAt: new Date().toISOString(),
            // }).save();
            //authentication not working so figure it out later
            const newPixArt = await new PixArt({
                title,
                username: "yunacorns",
                createdAt: new Date().toISOString(),
            });
            const pixArt = await newPixArt.save();
            return pixArt;
        },
        async deletePixArt(_, { ID }, contextValue) {
            // const user = checkAuth(contextValue);
            // try {
            //   const pixArt = await PixArt.findById(postId);
            //   if (user.username === pixArt.username) {
            //     await postId.delete();
            //     return "Post deleted successfully";
            //   } else {
            //     throw new AuthenticationError("Action not allowed");
            //   }
            // } catch (err) {
            //   throw new Error(err);
            // }
            console.log(ID);
            //authentication not working so hardcoding user for now
            const pixArt = await PixArt.findById(ID);
            console.log(pixArt);
            if (pixArt.username === "yunacorns") {
                await pixArt.deleteOne();
                return "Post deleted successfully";
            }
            else {
                throw new AuthenticationError("Action not allowed");
            }
        },
    },
};
export default pixartResolver;
// 65e393617e6ac48042dfa245
