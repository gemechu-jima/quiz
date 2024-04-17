
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
// const MONGO_URL="mongodb://localhost:27017/quiz"
const connect=()=>{
     mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Database connected ")
    })
    .catch((err)=>{
        console.log(process.env.MONGO_URL)
        console.log("error occur ", err)
    })
}
export default connect