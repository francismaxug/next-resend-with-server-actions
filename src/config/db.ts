import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string)
    console.log("MongoDB connected")
  } catch (error) {
    console.log("error connecting to MongoDB", error)
  }
}
