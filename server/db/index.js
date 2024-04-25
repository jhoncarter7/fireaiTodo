import mongoose from "mongoose"

export const mongodbConnection = async () => {
    try {
     const connectionInstance =   await mongoose.connect(process.env.MONGODB_URI)
         console.log("Connected to MongoDB", `${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Error in connection", error)
        process.exit()
    }
}