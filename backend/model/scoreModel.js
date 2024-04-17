import mongoose from "mongoose"

const scoreSchema=new mongoose.Schema({
    points:[{
        course: { type: String, required: true },
        score: { type: Number, required: true }
      }],
    email:{type:String, required:true},
    course:{type:String, required:false},
    useID:{type:mongoose.Types.ObjectId, ref:"User"},


})

export default mongoose.model("score", scoreSchema)