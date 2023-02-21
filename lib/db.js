import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const connection = {};

// Mongodb connect function
const dbConnect = async () => {
    if (connection.isConnect) {
        return connection.db;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI);
        connection.isConnect = true;
        connection.db = db;
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("Mongodb connection error", error);
    }
};

// Mongoose disconnect function
const dbDisconnect = async () => {
    if (mongoose.connection.readyState === 0) {
        return;
    }

    await mongoose.disconnect();
    console.log("Mongoose disconnected");
};

const db = { dbConnect, dbDisconnect };
export default db;
