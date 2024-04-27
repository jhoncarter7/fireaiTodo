import { User } from "../models/users.model.js";

const signup = async (req, res) => {
  try {
    console.log(req.body);
    const { fullName, userName, email, password } = req.body;
    if (
      [fullName, userName, email, password].some(
        (field) => field?.trim() === ""
      )
    ) {
     throw new Error("All fields are required")
    }
    const userExist = await User.findOne({
      $or: [{ userName }, { email }],
    });
    if (userExist) {
      throw new Error("User already exist");
    }

    const user = await User.create({
      fullName,
      userName: userName.toLowerCase(),
      email,
      password,
    });

    res.status(201).json({ message: "User created", user });
  } catch (error) {
    throw new Error(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if ([email, password].some((field) => field?.trim() === "")) {
     throw new Error("All fields are required")
    }

    const user = await User.findOne({email});

    if(!user){
      throw new Error("User not found")
    }

    const isPasswordCorrect = await user.isPasswordMatch(password)
    if(!isPasswordCorrect){
      throw new Error("Invalid credentials")
    }
    const  options = {httpOnly: true, secure: true, sameSite: "none"}

    return res.status(200).cookie("user", user, options)
    .json({message: "login success", user})

  } catch (error) {
    throw new Error(error);
  }
};





export { signup, login };
