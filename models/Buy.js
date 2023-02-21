import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        listing: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Listing",
        },
        offeringPrice: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Buy = mongoose.models.Buy || mongoose.model("Buy", schema);
export default Buy;
