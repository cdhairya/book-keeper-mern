import mongoose from "mongoose";
import { MongoURI } from "../config.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MongoURI);
    console.log(`MongoDB connected...`);
  } catch (error) {
    console.error(`Error while connecting to MongoDB: ${error.message}`);
  }
};

export default connectDB;
