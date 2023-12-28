import mongoose, { Schema, mongo } from "mongoose";

const postHoneySchema = new Schema(
    {
        mill: {
            type: String,
            // required: true
        },
        grn: {
            type: String,
            // required: true
        },
        user: {
            userId: String
        }
    },
    {
        timestamps: true
    }
);

const PostHoney = mongoose.models.PostHoney || mongoose.model("PostHoney", postHoneySchema);

export default PostHoney;