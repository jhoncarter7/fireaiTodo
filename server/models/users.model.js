import mongoose from "mongoose";
import bcrypt from "bcrypt";

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

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordMatch = async function(password){
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)