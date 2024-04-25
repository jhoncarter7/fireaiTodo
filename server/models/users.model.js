import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    userName:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        index: true
    },

email: {
    type: String,
    required: true,
    lowercase:true,
    unique: true,
    trim: true
},
password: {
    type: String,
    required: [true, "Password is required"],

}
}, {timestamps: true});

export const User = mongoose.model("User", userSchema)