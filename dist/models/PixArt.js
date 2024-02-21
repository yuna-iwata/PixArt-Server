import { Schema, model } from "mongoose";
const PixArtSchema = new Schema({
    id: String,
    username: { type: String, required: true },
    title: String,
    createdAt: { type: String, required: true },
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
});
const PixArt = model("pixart", PixArtSchema);
export default PixArt;
