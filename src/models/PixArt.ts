import { Schema, model } from "mongoose";

interface PixArt {
  id?: String;
  username: String;
  title: String;
  createdAt: String;
  user: {
    type: Schema.Types.ObjectId;
    ref: "users";
  };
}

const PixArtSchema = new Schema<PixArt>({
  id: String,
  username: { type: String, required: true },
  title: String,
  createdAt: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

const PixArt = model<PixArt>("pixart", PixArtSchema);

export default PixArt;
