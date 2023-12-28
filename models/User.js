import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        nickName: {
            type: String,
            required: true
        },
        pass: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;