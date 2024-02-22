import { Schema, model } from "mongoose";
const UserSchema = new Schema({
    id: String,
    username: String,
    password: String,
    email: String,
    createdAt: String,
});
const User = model("users", UserSchema);
export default User;
