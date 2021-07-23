import mongoose from "mongoose"

const connectDb = async () => {
  try {
    if (!process.env.MONGO_URI) throw Error("Mongo URI is required")
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log("Database connected")
  } catch (error) {
    console.log("could not connect to database")
    console.log(error.message)
  }
}

export default connectDb
