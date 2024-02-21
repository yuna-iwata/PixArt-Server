import { Schema, model } from "mongoose";
const UserSchema = new Schema({
    id: String,
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    createdAt: { type: String, required: true },
});
const Book = model("users", UserSchema);
export default Book;
