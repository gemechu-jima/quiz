import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { userModel } from "../model/userModel.js"
const signup = async (req, res) => {
    const { name, email, password } = req.body;
    

    try {
        const existUser = await userModel.findOne({ email });
        if (existUser) {
            return res.status(401).json({ msg: "You already have an account." });
        }
        if (!password) {
            return res.status(402).json({ msg: "Password is required." });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({ name, email, password:hashedPassword, image:req.file.path });
        let token=jwt.sign({email:newUser.email, UserId:newUser._id}, process.env.JWT_SECRET, {expiresIn:"1d"})
        res.status(200).json({ user: newUser, token:token });
        console.log("User created successfully.");
    } catch (error) {
        console.error("Error occurred during signup:", error);
        if (error.name === "ValidationError") {
            return res.status(403).json({ error: error.message });
        }
        res.status(500).json({ error: "An unexpected error occurred. Please try again later.", err:error.message });
    }
};

const login = async (req, res, next) => {
   const { email, password } = req.body;

   try {
       const existUser = await userModel.findOne({ email });

       if (!existUser) {
           return res.status(404).json({ msg: "This user doesn't exist. Please sign up." });
       }

       const isPasswordMatch = await bcrypt.compare(password, existUser.password);

       if (isPasswordMatch) {
        let token=jwt.sign({email:existUser.email, UserId:existUser._id}, process.env.JWT_SECRET, {expiresIn:"1d"})
           existUser.password=undefined;
           return res.status(200).json({ msg: "Successfully logged in" , existUser, token});
       } else {
           return res.status(401).json({ msg: "Incorrect password. Please try again." });
       }
   } catch (error) {
       console.error("Error occurred during login:", error);
       return res.status(500).json({ error: "An unexpected error occurred. Please try again later." });
   }
}
export {signup, login}