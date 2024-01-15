import mongoose from "mongoose";
let isConnected = false;

export const connectToDB = async () => {
    mongose.set('strictQuery', true)

    if (isConnected) {
        console.log("=> MongoDB is connected successfully!");
        return
    }

    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: "welture",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            });

            isConnected = true;

            console.log("=> MongoDB connected")
    }
    catch (error) {
        console.log("=> MongoDB connection error: ", error);
    }
}