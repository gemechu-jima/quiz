
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const MONGO_URL=process.env.MONGODB_URL 
const connect=()=>{
     mongoose.connect(MONGO_URL)
    .then(()=>{
        console.log("Database connected ")
    })
    .catch((err)=>{
        console.log(process.env.MONGO_URL)
        console.log("error occur ", err)
    })
}
export default connect