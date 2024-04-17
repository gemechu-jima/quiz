
import { reactQuiz } from "../model/reactModel.js"
import { javascriptQuiz } from "../model/javascriptModel.js"
import scoreModel from "../model/scoreModel.js"
const getReactQuestion=async(req, res)=>{
    try {
        const quiz=await reactQuiz.find({})
        res.status(200).json(quiz)
    } catch (error) {
        console.log(error.message)
        res.status(400).json(error)
    }
   
}
const getJavascriptQuestion=async(req, res)=>{
    try {
        const quiz=await javascriptQuiz.find({})
        res.status(200).json(quiz)
    } catch (error) {
        console.log(error.message)
        res.status(400).json(error)
    }
   
}
const createScore=async(req, res)=>{
    const {points, email, course}=req.body
    let existUser
    try {
        existUser=await scoreModel.findOne({email})
        if(!existUser){
            const newUser = await scoreModel.create({ points: [{ course:course, score: points }], email });
            return res.status(200).json({ score: newUser });
        }
        
            let courseIndex=existUser?.points?.findIndex(item=>item.course===course)
            if(courseIndex!==-1){
               existUser.points[courseIndex].score=points
            }else{
                existUser.points.push({course, score:points})
            }
            await existUser.save()
            return res.status(200).json({msg:"successfully update your points"})
        
        
    } catch (error) {
        console.error("Error occurred during score creation:", error);
        return res.status(400).json({ error: error.message });
    }
   
}
const getScore=async(req, res)=>{
    const { email}=req.params
    let userScore
    try {
         userScore=await scoreModel.findOne({email})
         console.log(userScore)
        if(userScore){
           res.status(200).json({msg:"successfully YOUR score", userScore})
        }else{
            res.status(404).json({msg:"You are not take quiz please take first"})
        }

    } catch (error) {
        console.log("error is happen ", error.message)
        res.status(400).json({msg:"please check your request ", err:error.message})
    }
}
export {getReactQuestion, getJavascriptQuestion, createScore, getScore}