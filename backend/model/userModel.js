
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    image: { type: String,  },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    point: [{ type: String, default: 0 }]
});

export const userModel=mongoose.model("user", userSchema)