import PixArt from "../../models/PixArt.js";
import checkAuth from "../../utils/check-auth.js";

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
      const user = checkAuth(contextValue);
      const newPixArt = await new PixArt({
        title,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString(),
      }).save();

      const pixArt = await newPixArt.save();
      return pixArt;
    },
  },
};

export default pixartResolver;
