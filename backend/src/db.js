import mongoose from 'mongoose'

const connectDB = async() => {
  try {
    await mongoose.connect("mongodb://localhost/pokedex");
    console.log(">>> DB is connected")
  } catch (error) {
    console.log(error)
  }
}

export default connectDB;