import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: true,
        },
        password: {
            type: String,
        },
        status: {
            type: Boolean,
            default: true,
        },
        googleId: {
            type: String,
            required: true,
        },
        role: {
            type: [String],
            enum: ["user", "admin"],
            default: "user",
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.models.User || mongoose.model("User", schema);
export default User;
