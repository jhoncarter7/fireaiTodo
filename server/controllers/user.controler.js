import { User } from "../models/users.model.js";


 const signup = async(req, res)=>{
try {
    console.log(req.body)
    const {fullName, userName, email, password} = req.body;
    if([fullName, userName, email, password].some(field => field?.trim() === "")){
        return res.status(400).json({message: "All fields are required"})
    }
    const userExist = await User.findOne({
        $or: [{userName}, {email}]
    })
    if(userExist){
        return res.status(409).json({message: "User already exist"})
    }

    const user =  await User.create({
        fullName,
        userName: userName.toLowerCase(),
        email,
        password
    })

    res.status(201).json({message: "User created", user})
} catch (error) {
    throw new Error(error)
}
}

export { signup}