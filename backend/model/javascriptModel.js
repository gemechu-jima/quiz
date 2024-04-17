import mongoose from "mongoose"


const questionSchema=new mongoose.Schema({
    question:{type:String, require:true},
    options:{type:[String], require:true },
    correctOption:{type:Number, require:true},
    points:{type:Number, require:true}
})
export const javascriptQuiz=mongoose.model("javascript", questionSchema )