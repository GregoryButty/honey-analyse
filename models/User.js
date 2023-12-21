import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        nickName: String,
        pass: String
    },
    {
        timestamps: true
    }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;