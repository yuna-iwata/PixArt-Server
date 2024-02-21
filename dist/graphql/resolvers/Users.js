import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/User.js";
import "dotenv/config";
const usersResolver = {
    Mutation: {
        async register(_, { registerInput: { username, email, password, confirmPassword } }, context, info) {
            //TO DO: validate user data
            //make sure user doesn't already exist
            //hash password and create an auth token
            console.log("username", username);
            console.log("email", email);
            console.log("password", password);
            password = await bcrypt.hash(password, 12);
            const newUser = new User({
                email,
                username,
                password,
                createdAt: new Date().toISOString(),
            });
            const res = await newUser.save();
            console.log("here", res);
            const token = jwt.sign({
                id: res.id,
                email: res.email,
                username: res.username,
            }, process.env.SECRET_KEY, { expiresIn: "1h" });
            return {
                id: res._id,
                email: res.email,
                token,
                username: res.username,
                createdAt: res.createdAt,
            };
        },
    },
};
export default usersResolver;
