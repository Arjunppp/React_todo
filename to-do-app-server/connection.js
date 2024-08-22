import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URI;

export const dbConnection = async (mongoUrl) => {
    try {
        await mongoose.connect(mongoUrl);
        console.log('Database connected');

    } catch (error) {

        console.error(error);
        

    }


}