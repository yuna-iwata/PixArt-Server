import { Schema, model } from "mongoose";

interface User {
  id?: String;
  username: String;
  password: String;
  email: String;
  createdAt: String;
}

const UserSchema = new Schema<User>({
  id: String,
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: String, required: true },
});

const User = model<User>("users", UserSchema);

export default User;
