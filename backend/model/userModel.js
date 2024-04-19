
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    image: { type: String,  },
    name: { type: String, required: true },
    email: { type: String, unique:true, required: true },
    password: { type: String, required: true },
    point: [{ type: String, default: 0 }]
}, {
    timestamps:true
});

export const userModel=mongoose.model("user", userSchema)