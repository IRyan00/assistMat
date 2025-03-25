import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB connected`);
  } catch (error) {
    console.error(`DB not connected`, error);
  }
};

export default connectDB;
